type SettingsKeyType = typeof process.env.NODE_ENV;

type SettingsType = {
  [key in SettingsKeyType]: { apiUrl: string; imageUrl: string };
};

const settings: SettingsType = {
  development: {
    // apiUrl: "https://shark-app-y5ox6.ondigitalocean.app/api/",
    // apiUrl: 'http://192.168.1.27:9090/api/',
    apiUrl: "http://161.97.170.81:9090/api",
    imageUrl: "http://161.97.170.81:9090/",
  },
  test: {
    apiUrl: "http://192.168.1.7:9090/api/",
    imageUrl: "http://192.168.1.7:9090/",
  },
  production: {
    apiUrl: "https://shark-app-y5ox6.ondigitalocean.app/api/",
    imageUrl: "https://shark-app-y5ox6.ondigitalocean.app/",
  },
};

const getCurrentSettings = () => {
  if (process.env.REACT_APP_NODE_ENV === "development") {
    return settings.development;
  }
  if (process.env.REACT_APP_NODE_ENV === "test") {
    return settings.test;
  }
  return settings.production;
};

export default getCurrentSettings();
