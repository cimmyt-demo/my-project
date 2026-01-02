// userSettings.js
// Dummy user settings handler

const DEFAULT_SETTINGS = {
  theme: "light",
  notifications: true,
  language: "en"
};

function mergeUserSettings(userSettings = {}) {
  return {
    ...DEFAULT_SETTINGS,
    ...userSettings
  };
}

function isDarkModeEnabled(settings) {
  return settings.theme === "dark";
}

export { mergeUserSettings, isDarkModeEnabled };
