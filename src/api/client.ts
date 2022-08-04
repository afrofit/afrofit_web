import axios from "axios";
import settings from "../config/settings";

const API_CLIENT = axios.create({
  baseURL: settings.apiUrl,
  timeout: 1000,
  headers: {
    Accept: "*",
    //'Authorization': 'token <your-token-here> -- https://docs.GitHub.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token'
  },
});

export default API_CLIENT;
