import API_CLIENT from "../../../../api/client";
import { AxiosError } from "axios";

import {
  finishedRequest,
  hideGenericErrorDialog,
  newRequest,
  showGenericErrorDialog,
  showGenericSuccessDialog,
} from "../../ui/ui.slice";
import { AppThunk } from "../../../store";

const sendPasswordResetLinkApi = async (email: string) => {
  console.log('email==>', email)
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
        dispatch(showGenericSuccessDialog('Your Request send Successfully'))
        // dispatch(storeUserToken(response.data.token));
        // STORE_TOKEN(response.data.token);
      } else {
        dispatch(finishedRequest());
        return showGenericErrorDialog(`An error occured logging in.`);
      }
      dispatch(finishedRequest());
    } catch (error: any) {
      const err = error as AxiosError;
      const errorMessage =
        (err.response?.data as string) ??
        "An error occured trying to send your password reset link.";
      dispatch(showGenericErrorDialog(errorMessage));
      dispatch(finishedRequest());
    }
  };
}
