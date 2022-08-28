import API_CLIENT from "../../../../api/client";
import { AxiosError } from "axios";

import {
  finishedRequest,
  hideGenericErrorDialog,
  newRequest,
  showGenericErrorDialog,
} from "../../ui/ui.slice";
import { AppThunk } from "../../../store";

const sendPasswordResetLinkApi = async (email: string) => {
  return await API_CLIENT.post("users/send-password-reset-link", {
    email,
  });
};

export function SendPasswordResetLink(email: string): AppThunk {
  return async (dispatch) => {
    try {
      dispatch(newRequest());
      dispatch(hideGenericErrorDialog());

      const response = await sendPasswordResetLinkApi(email);
      if (response && response.data) {
        console.log("Response from reset password", response.data);
        // dispatch(storeUserToken(response.data.token));
        // STORE_TOKEN(response.data.token);
      } else {
        dispatch(finishedRequest());
        return showGenericErrorDialog(`An error occured logging in.`);
      }
      dispatch(finishedRequest());
    } catch (error: any) {
      console.log("Error!", error.response.data);
      const err = error as AxiosError;
      dispatch(showGenericErrorDialog(` ${err.response?.data as string}`));
      dispatch(finishedRequest());
    }
  };
}
