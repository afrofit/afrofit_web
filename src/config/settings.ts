type SettingsKeyType = typeof process.env.NODE_ENV;

type SettingsType = {
  [key in SettingsKeyType]: { apiUrl: string };
};

const settings: SettingsType = {
  development: {
    apiUrl: "http://localhost:9099/",
  },
  test: {
    apiUrl: "http://localhost:9099/",
  },
  production: {
    apiUrl: "https://somwhere.com/",
  },
};

const getCurrentSettings = () => {
  if (process.env.NODE_ENV === "development") return settings.development;
  if (process.env.NODE_ENV === "test") return settings.test;
  return settings.production;
};

export default getCurrentSettings();
