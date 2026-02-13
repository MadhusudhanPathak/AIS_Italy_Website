// Validation helper functions
function validateTeamData(teamMembers) {
  const errors = [];

  if (!Array.isArray(teamMembers)) {
    throw new Error('Team data must be an array');
  }

  teamMembers.forEach((member, index) => {
    if (!member.name) errors.push(`Team member ${index} must have a name`);
    if (!member.role) errors.push(`Team member ${index} must have a role`);
    if (!member.bio) errors.push(`Team member ${index} must have a bio`);
    if (!member.email || !isValidEmail(member.email))
      errors.push(`Team member ${index} must have a valid email`);
  });

  if (errors.length > 0) {
    console.warn('Team data validation warnings:', errors);
  }

  return teamMembers;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Team member data
const teamData = [
  {
    name: 'Dr. Maria Rossi',
    role: 'Founder & Director',
    bio: 'AI researcher with 10+ years of experience in safety and alignment. PhD in Computer Science.',
    email: 'maria@aisafetyitalia.org',
  },
  {
    name: 'Cristian Curaba',
    role: 'Research Fellowship',
    bio: 'Based in Udine, I am currently investigating the role of autoformalization for AI safety.',
    email: 'https://cristian-curaba.github.io/',
  },
  {
    name: 'Michele Mignani',
    role: 'PhD Student',
    bio: 'Based in Udine, I am currently investigating the role of autoformalization for AI safety..',
    email: 'michele.mignani@uniud.it',
  },
];

module.exports = validateTeamData(teamData);
