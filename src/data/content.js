// Global data file to load content from root data directory
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

// Load content data from root data directory
const dataDir = path.join(__dirname, '../..', 'data'); // Go up to root data directory

const loadDataFile = (filename) => {
  try {
    const filePath = path.join(dataDir, filename);
    if (fs.existsSync(filePath)) {
      const fileContents = fs.readFileSync(filePath, 'utf8');
      if (filename.endsWith('.yaml') || filename.endsWith('.yml')) {
        return yaml.load(fileContents);
      }
    }
  } catch (error) {
    console.error(`Error loading data file ${filename}:`, error);
  }
  return {};
};

// Load all content data files
const home = loadDataFile('home.yaml');
const about = loadDataFile('about.yaml');
const events = loadDataFile('events.yaml');
const activities = loadDataFile('activities.yaml');
const community = loadDataFile('community.yaml');
const faq = loadDataFile('faq.yaml');
const contact = loadDataFile('contact.yaml');
const global = loadDataFile('global.yaml');

// Export all data
module.exports = {
  home,
  about,
  events,
  activities,
  community,
  faq,
  contact,
  global,
};
