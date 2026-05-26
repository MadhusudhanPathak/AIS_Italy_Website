#!/usr/bin/env python3
"""
Convert the AIS Italy registration form CSV to data/members.yaml.

Usage:
    python3 scripts/update-members.py

Place the latest CSV export from "AI Safety Italy – Form di iscrizione (Risposte)"
in the data/ directory, then run this script.
"""

import csv
import glob
import os
import sys
import yaml
from datetime import date

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

def find_csv():
    for pattern in [
        os.path.join(DATA_DIR, "AI Safety Italy*Form*.csv"),
        os.path.join(DATA_DIR, "AI Safety Italy*.csv"),
    ]:
        matches = sorted(glob.glob(pattern))
        if matches:
            return matches[-1]
    sys.exit("No CSV found in data/ matching 'AI Safety Italy*.csv'")

def parse(csv_path):
    members = []
    with open(csv_path, newline='', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for i, row in enumerate(reader):
            row = {k.strip(): v.strip() for k, v in row.items()}

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

            m = {'id': i + 1, 'name': name, 'email': email}
            if profile:    m['profile']     = profile
            if city or country:
                           m['location']    = ', '.join(filter(None, [city, country]))
            if career:     m['career']      = career
            if institution:m['institution'] = institution
            if hours:      m['hours_per_month'] = hours
            if areas:      m['areas']       = areas
            if groups:     m['groups']      = groups
            members.append(m)
    return members

def main():
    csv_path = find_csv()
    print(f"Reading: {csv_path}")
    members = parse(csv_path)
    data = {'last_updated': date.today().isoformat(), 'members': members}
    with open(OUT_FILE, 'w', encoding='utf-8') as f:
        yaml.dump(data, f, allow_unicode=True, default_flow_style=False, sort_keys=False)
    print(f"Written {len(members)} members to {OUT_FILE}")

if __name__ == '__main__':
    main()
