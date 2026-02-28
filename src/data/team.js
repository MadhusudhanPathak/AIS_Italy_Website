const { validateTeamMember, logValidationErrors } = require('../utils/validation');

/**
 * Validates an array of team members
 * @param {Array} teamMembers - Array of team member objects to validate
 * @returns {Array} The validated team members array
 * @throws {Error} If input is not an array
 */
function validateTeamData(teamMembers) {
  const errors = [];

  if (!Array.isArray(teamMembers)) {
    throw new Error('Team data must be an array');
  }

  teamMembers.forEach((member, index) => {
    const validation = validateTeamMember(member);
    if (!validation.valid) {
      errors.push(
        `Team member ${index} (${member.name || 'unknown'}): ${validation.errors.join(', ')}`
      );
    }
  });

  if (errors.length > 0) {
    logValidationErrors('team data', errors);
  }

  return teamMembers;
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
