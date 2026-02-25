// Validation helper functions
function validateSiteData(data) {
  const errors = [];

  if (!data.site?.name) errors.push('Site name is required');
  if (!data.site?.description) errors.push('Site description is required');
  if (!data.site?.domain) errors.push('Site domain is required');
  if (!data.site?.email || !isValidEmail(data.site.email))
    errors.push('Valid site email is required');

  if (!Array.isArray(data.navigation)) errors.push('Navigation must be an array');
  else {
    data.navigation.forEach((item, index) => {
      if (!item.name) errors.push(`Navigation item ${index} must have a name`);
      if (!item.url) errors.push(`Navigation item ${index} must have a URL`);
    });
  }

  if (!data.social?.linkedin) errors.push('LinkedIn URL is required in social links');

  if (!data.forms?.mailingList) errors.push('Mailing list form URL is required');
  if (!data.forms?.courseApplication) errors.push('Course application form URL is required');

  if (errors.length > 0) {
    console.warn('Site data validation warnings:', errors);
  }

  return data;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

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

module.exports = validateSiteData(siteData);
