import jwtDecode from "jwt-decode";
// routes
// import { PATH_AUTH } from "../routes/paths";
//
// import axios from "./axios";
import API_CLIENT from "../api/client";

// ----------------------------------------------------------------------

const isValidToken = (STORAGE_TOKEN_KEY_standin: string) => {
  if (!STORAGE_TOKEN_KEY_standin) {
    return false;
  }
  const decoded = jwtDecode<{ exp: number }>(STORAGE_TOKEN_KEY_standin);

  const currentTime = Date.now() / 1000;

  return decoded.exp > currentTime;
};

const handleTokenExpired = (exp: number) => {
  let expiredTimer;

  const currentTime = Date.now();

  // Test token expires after 10s
  // const timeLeft = currentTime + 10000 - currentTime; // ~10s
  const timeLeft = exp * 1000 - currentTime;
  console.log("timeLeft", timeLeft);
  clearTimeout(expiredTimer);

  expiredTimer = setTimeout(() => {
    sessionStorage.clear();

    window.location.href = "/";
  }, timeLeft);
};

const setSession = (accessToken: string | null) => {
  if (accessToken) {
    sessionStorage.setItem("STORAGE_TOKEN_KEY_standin", accessToken);
    API_CLIENT.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

    // This function below will handle when token is expired
    const { exp } = jwtDecode<{ exp: number }>(accessToken); // ~2 hours by afrofit server

    handleTokenExpired(exp);
  } else {
    sessionStorage.removeItem("STORAGE_TOKEN_KEY_standin");
    delete API_CLIENT.defaults.headers.common.Authorization;
  }
};

export { isValidToken, setSession };
