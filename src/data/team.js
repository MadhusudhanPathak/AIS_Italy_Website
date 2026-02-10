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
    name: 'Alessandro Ferrari',
    role: 'Program Director',
    bio: 'Tech educator and community builder. Passionate about making AI safety accessible.',
    email: 'alessandro@aisafetyitalia.org',
  },
  {
    name: 'Giulia Bianchi',
    role: 'Community Coordinator',
    bio: 'Organizes events and manages community engagement across Italy.',
    email: 'giulia@aisafetyitalia.org',
  },
];

module.exports = validateTeamData(teamData);
