// userProfile.js
// Dummy user profile utilities

function formatUserName(firstName, lastName) {
  if (!firstName || !lastName) {
    return "Anonymous User";
  }
  return `${firstName.trim()} ${lastName.trim()}`;
}

function calculateProfileCompleteness(profile) {
  let score = 0;

  if (profile.email) score += 25;
  if (profile.avatarUrl) score += 25;
  if (profile.bio) score += 25;
  if (profile.location) score += 25;

  return score;
}

export { formatUserName, calculateProfileCompleteness };
