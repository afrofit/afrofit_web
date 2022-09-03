import { NODE_ENV } from "../constants.config";

type SettingsKeyType = typeof process.env.NODE_ENV;

type SettingsType = {
  [key in SettingsKeyType]: { apiUrl: string };
};

const settings: SettingsType = {
  development: {
    apiUrl: "http://localhost:9099/api/",
  },
  test: {
    apiUrl: "http://localhost:9099/api/",
  },
  production: {
    apiUrl: "https://shark-app-y5ox6.ondigitalocean.app/api/",
  },
};

const getCurrentSettings = () => {
  if (NODE_ENV === "development") return settings.development;
  // if (process.env.NODE_ENV === "development") return settings.development;
  // if (process.env.NODE_ENV === "test") return settings.test;
  if (NODE_ENV === "test") return settings.test;
  return settings.production;
};

export default getCurrentSettings();
