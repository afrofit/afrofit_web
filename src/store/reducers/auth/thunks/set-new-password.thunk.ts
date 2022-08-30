import API_CLIENT from "../../../../api/client";
import { AxiosError } from "axios";

import {
  finishedRequest,
  hideGenericErrorDialog,
  newRequest,
  showGenericErrorDialog,
} from "../../ui/ui.slice";
import { AppThunk } from "../../../store";
import { STORE_TOKEN } from "../../../../api/storage";
import { storeUserToken } from "../auth.slice";

type NewPasswordType = { password: string; hash: string };

const setNewPasswordApi = async (userId: string, formData: NewPasswordType) => {
  return await API_CLIENT.post(`users/set-new-password/${userId}`, {
    ...formData,
  });
};

export function SetNewPassword(
  userId: string,
  formData: NewPasswordType
): AppThunk {
  return async (dispatch) => {
    try {
      dispatch(newRequest());
      dispatch(hideGenericErrorDialog());

      const response = await setNewPasswordApi(userId, formData);
      if (response && response.data) {
        console.log("Response from reset password", response.data);
        dispatch(storeUserToken(response.data.token));
        STORE_TOKEN(response.data.token);
      } else {
        dispatch(finishedRequest());
        return showGenericErrorDialog(`An error occured logging in.`);
      }
      dispatch(finishedRequest());
    } catch (error: any) {
      const err = error as AxiosError;
      const errorMessage =
        (err.response?.data as string) ??
        "An error occured trying to set your new password.";
      dispatch(showGenericErrorDialog(errorMessage));
      dispatch(finishedRequest());
    }
  };
}
