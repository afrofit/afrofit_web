import { AppThunk } from "../../../store";
import {
  finishedRequest,
  hideGenericErrorDialog,
  newRequest,
  showGenericErrorDialog,
} from "../../ui/ui.slice";
import API_CLIENT from "../../../../api/client";
import { STORE_TOKEN } from "../../../../api/storage";
import { AxiosError } from "axios";
import { storeUserToken, updateUserDisplayPic } from "../auth.slice";
import { setSession } from "../../../../utils/jwt";

type LoginUserDataType = {
  email: string;
  password: string;
  pushSubscription?: any;
};

const logInApi = async (userData: LoginUserDataType) => {
  const { email, password, pushSubscription } = userData;
  return await API_CLIENT.post("users/login", {
    email,
    password,
    pushSubscription,
  });
};

// ===============================
function urlBase64ToUint8Array(base64String: any) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  // eslint-disable-next-line
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

async function subscription() {
  try {
    const convertedVapidKey = urlBase64ToUint8Array(
      process.env.REACT_APP_PUBLIC_VAPID_KEY
    );

    const registration = await navigator.serviceWorker.ready;
    if (!registration.pushManager) {
      return;
    }

    let subscription = await registration.pushManager.getSubscription();

    if (subscription === null) {

      subscription = await registration.pushManager.subscribe({
        applicationServerKey: convertedVapidKey,
        userVisibleOnly: true,
      });


      return subscription;
    } else {

      return subscription;
    }
  } catch (error) {
    return {};
  }
}

// ====================================

export function LogIn(userData: LoginUserDataType, navigate: any): AppThunk {
  return async (dispatch) => {
    try {
      dispatch(newRequest());
      dispatch(hideGenericErrorDialog());
      userData.pushSubscription = {};

      if ("serviceWorker" in navigator)
        userData.pushSubscription = await subscription();

      const response = await logInApi(userData);
      localStorage.setItem("email", userData?.email);
      localStorage.setItem("password", userData?.password);

      if (response && response.data) {
        dispatch(storeUserToken(response.data.token));
        dispatch(updateUserDisplayPic(response.data.data));
        // STORE_TOKEN(response.data.token);
        setSession(response.data.token);

        navigate();
      } else if (!response || !response.data) {
        dispatch(finishedRequest());
        return showGenericErrorDialog(`An error occured logging in.`);
      }
      dispatch(finishedRequest());
    } catch (error) {
      const err = error as AxiosError;
      const errorMessage =
        (err.response?.data as string) ??
        "An error occured trying to log you in.";
      dispatch(showGenericErrorDialog(errorMessage));
      dispatch(finishedRequest());
    }
  };
}
