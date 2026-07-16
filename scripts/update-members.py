#!/usr/bin/env python3
"""
Convert the AIS Italy registration form export to data/members.yaml.

Usage:
    python3 scripts/update-members.py

Place the latest export from "AI Safety Italy – Form di iscrizione (Risposte)"
in the data/ directory (an .xlsx export is preferred, a .csv export also works),
then run this script.

Publication rules:
  * Members who registered BEFORE the cutoff date (GRANDFATHER_BEFORE) are
    grandfathered in and always published — the consent question did not exist
    when they signed up.
  * From the cutoff date onward a profile is published ONLY if the form's last
    column ("Consenso alla pubblicazione del profilo nella Community") contains
    "Acconsento alla pubblicazione delle informazioni sopra indicate nella
    sezione 'Community' del sito web." Anyone who left it blank or answered
    otherwise is skipped.
"""

import csv
import glob
import os
import re
import sys
import zipfile
import xml.etree.ElementTree as ET
import yaml
from datetime import date, datetime, timedelta

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(SCRIPT_DIR, '..', 'data')
OUT_FILE = os.path.join(DATA_DIR, 'members.yaml')

GROUPS_MAP = {
    "Programma di mentorship": "mentorship",
    "Governance, fundraising e finanze": "governance",
    "Comunicazione": "communication",
    "Infrastruttura tecnica": "technical",
    "Comunità e networking": "community",
    "Eventi": "events",
    "Seminari": "seminars",
    "Didattica e divulgazione": "education",
}

ACTIVE_VALUES = {"Coordinamento (o co-coordinamento)", "Partecipazione stabile"}

# Column holding the publication consent (the form's last column).
CONSENT_COL = "Consenso alla pubblicazione del profilo nella Community"
# Only this answer authorises publishing a profile on the website.
CONSENT_VALUE = (
    "Acconsento alla pubblicazione delle informazioni sopra indicate "
    "nella sezione \"Community\" del sito web."
)

# Column holding the submission timestamp.
TIMESTAMP_COL = "Informazioni cronologiche"
# Registrations submitted before this date predate the consent question and are
# published regardless of consent. Registrations from this date onward require
# explicit consent (see CONSENT_VALUE).
GRANDFATHER_BEFORE = date(2026, 6, 30)
# xlsx stores dates as serial numbers counted from this epoch.
EXCEL_EPOCH = date(1899, 12, 30)


def _normalize(text):
    """Lowercase, collapse whitespace and unify quote glyphs for robust matching."""
    text = (text or '')
    for fancy in ('“', '”', '„', '‟', '«', '»'):
        text = text.replace(fancy, '"')
    for fancy in ('‘', '’', '‚', '‛'):
        text = text.replace(fancy, "'")
    return re.sub(r'\s+', ' ', text).strip().lower()


def has_consent(row):
    return _normalize(row.get(CONSENT_COL, '')) == _normalize(CONSENT_VALUE)


def submission_date(row):
    """Parse the registration timestamp into a date, or None if unparseable."""
    raw = (row.get(TIMESTAMP_COL, '') or '').strip()
    if not raw:
        return None
    # xlsx exports store the timestamp as an Excel serial number.
    try:
        return EXCEL_EPOCH + timedelta(days=int(float(raw)))
    except ValueError:
        pass
    # csv exports store it as a local/ISO date string.
    for fmt in ("%d/%m/%Y %H:%M:%S", "%d/%m/%Y", "%Y-%m-%d %H:%M:%S", "%Y-%m-%d",
                "%m/%d/%Y %H:%M:%S", "%m/%d/%Y"):
        try:
            return datetime.strptime(raw, fmt).date()
        except ValueError:
            continue
    return None


def should_publish(row):
    """Grandfather pre-cutoff registrations; require consent from the cutoff on."""
    d = submission_date(row)
    if d is not None and d < GRANDFATHER_BEFORE:
        return True
    return has_consent(row)


def find_export():
    """Return the newest registration export, preferring .xlsx over .csv."""
    for pattern in [
        os.path.join(DATA_DIR, "AI Safety Italy*Form*.xlsx"),
        os.path.join(DATA_DIR, "AI Safety Italy*.xlsx"),
        os.path.join(DATA_DIR, "AI Safety Italy*Form*.csv"),
        os.path.join(DATA_DIR, "AI Safety Italy*.csv"),
    ]:
        matches = sorted(glob.glob(pattern), key=os.path.getmtime)
        if matches:
            return matches[-1]
    sys.exit("No registration export found in data/ matching 'AI Safety Italy*'")


def _col_index(cell_ref):
    """'C5' -> 2 (zero-based column index)."""
    letters = re.match(r'[A-Z]+', cell_ref).group(0)
    idx = 0
    for ch in letters:
        idx = idx * 26 + (ord(ch) - 64)
    return idx - 1


def read_xlsx(path):
    """Read the first worksheet into a list of header->value dicts (stdlib only)."""
    ns = {'a': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
    t_ns = '{http://schemas.openxmlformats.org/spreadsheetml/2006/main}t'
    with zipfile.ZipFile(path) as z:
        shared = []
        if 'xl/sharedStrings.xml' in z.namelist():
            sroot = ET.fromstring(z.read('xl/sharedStrings.xml'))
            for si in sroot.findall('a:si', ns):
                shared.append(''.join(t.text or '' for t in si.iter(t_ns)))
        sheet = ET.fromstring(z.read('xl/worksheets/sheet1.xml'))

        rows = []
        for row in sheet.findall('.//a:row', ns):
            cells = {}
            for c in row.findall('a:c', ns):
                v = c.find('a:v', ns)
                if v is not None:
                    val = shared[int(v.text)] if c.get('t') == 's' else (v.text or '')
                else:
                    inline = c.find('a:is', ns)
                    val = ''.join(x.text or '' for x in inline.iter(t_ns)) if inline is not None else ''
                cells[_col_index(c.get('r'))] = val
            rows.append(cells)

    if not rows:
        return []
    width = max((max(r) for r in rows if r), default=-1) + 1
    header = [(rows[0].get(i, '') or '').strip() for i in range(width)]
    records = []
    for raw in rows[1:]:
        records.append({header[i]: (raw.get(i, '') or '').strip() for i in range(width)})
    return records


def read_csv(path):
    with open(path, newline='', encoding='utf-8') as f:
        return [{k.strip(): (v or '').strip() for k, v in row.items()}
                for row in csv.DictReader(f)]


def load_rows(path):
    if path.lower().endswith('.xlsx'):
        return read_xlsx(path)
    return read_csv(path)


def dedupe(rows):
    """Collapse repeat submissions by email, keeping the most recent one.

    Rows without an email are never merged. Returns (deduped_rows, removed_count)
    preserving the order in which each email first appeared.
    """
    by_key = {}   # key -> (submission_date, row)
    order = []
    removed = 0
    for idx, row in enumerate(rows):
        email = _normalize(row.get('Indirizzo email', ''))
        key = email or f"__noemail_{idx}"
        d = submission_date(row) or date.min
        if key not in by_key:
            by_key[key] = (d, row)
            order.append(key)
        else:
            removed += 1
            if d >= by_key[key][0]:
                by_key[key] = (d, row)
    return [by_key[k][1] for k in order], removed


def parse(rows):
    members = []
    skipped = 0
    member_id = 0
    rows, duplicates = dedupe(rows)
    for row in rows:
        if not should_publish(row):
            skipped += 1
            continue
        member_id += 1

        name     = f"{row.get('Nome','')} {row.get('Cognome','')}".strip()
        email    = row.get('Indirizzo email', '')
        profile  = row.get('Sito o profilo professionale', '')
        city     = row.get('Città in cui vivi attualmente', '')
        country  = row.get('Paese in cui ti trovi attualmente', '')
        career   = row.get('A quale livello di carriera ti collocheresti?', '')
        institution = row.get('Presso quale istituzione, azienda o laboratorio studi o lavori?', '')
        hours    = row.get('Quante ore vuoi dedicare ad AI Safety Italy ogni mese?', '')
        areas    = row.get('Quali aree ti interessano di più?', '')

        groups = [
            key for col, key in GROUPS_MAP.items()
            if any(active in row.get(col, '') for active in ACTIVE_VALUES)
        ]

        m = {'id': member_id, 'name': name, 'email': email}
        if profile:    m['profile']     = profile
        if city or country:
                       m['location']    = ', '.join(filter(None, [city, country]))
        if career:     m['career']      = career
        if institution:m['institution'] = institution
        if hours:      m['hours_per_month'] = hours
        if areas:      m['areas']       = areas
        if groups:     m['groups']      = groups
        members.append(m)
    return members, skipped, duplicates


def main():
    export_path = find_export()
    print(f"Reading: {export_path}")
    rows = load_rows(export_path)
    members, skipped, duplicates = parse(rows)
    data = {'last_updated': date.today().isoformat(), 'members': members}
    with open(OUT_FILE, 'w', encoding='utf-8') as f:
        yaml.dump(data, f, allow_unicode=True, default_flow_style=False, sort_keys=False)
    print(f"Written {len(members)} members to {OUT_FILE} "
          f"({duplicates} duplicate submissions merged; "
          f"{skipped} skipped: post-{GRANDFATHER_BEFORE.isoformat()} without consent)")


if __name__ == '__main__':
    main()
