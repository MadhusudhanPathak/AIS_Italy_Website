const { validateSiteData, logValidationErrors } = require('../utils/validation');

// Site configuration
const siteData = {
  site: {
    name: 'AI Safety Italia',
    description:
      'A growing grassroots AI community working to reduce risks from advanced AI by raising awareness, upskilling and creating opportunities for a safer AI world.',
    domain: 'aisafetyitalia.org',
    email: 'aisafetyitalia@gmail.com',
  },
  navigation: [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about/', dropdown: false },
    { name: 'Events & News', url: '/events/' },
    { name: 'Community', url: '/community/' },
    { name: 'FAQ', url: '/faq/' },
    { name: 'Contact', url: '/contact/' },
  ],
  social: {
    linkedin: 'https://www.linkedin.com/company/ai-safety-italia/',
    discord: 'https://discord.gg/aYNAPZjQJu',
  },
  forms: {
    mailingList: 'https://forms.google.com/placeholder-mailing-list',
    courseApplication: 'https://forms.google.com/placeholder-course-application',
  },
};

// Validate site data on module load
const validation = validateSiteData(siteData);
if (!validation.valid) {
  logValidationErrors('site data', validation.errors);
}

module.exports = siteData;
