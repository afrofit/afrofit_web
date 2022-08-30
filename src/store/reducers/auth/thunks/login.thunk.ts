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
import { storeUserToken } from "../auth.slice";

type LoginUserDataType = { email: string; password: string };

const logInApi = async (userData: LoginUserDataType) => {
  const { email, password } = userData;
  return await API_CLIENT.post("users/login", { email, password });
};

export function LogIn(userData: LoginUserDataType): AppThunk {
  return async (dispatch) => {
    try {
      dispatch(newRequest());
      dispatch(hideGenericErrorDialog());

      const response = await logInApi(userData);
      if (response && response.data) {
        dispatch(storeUserToken(response.data.token));
        STORE_TOKEN(response.data.token);
      } else if (!response || !response.data) {
        dispatch(finishedRequest());
        return showGenericErrorDialog(`An error occured logging in.`);
      }
      dispatch(finishedRequest());
    } catch (error: any) {
      const err = error as AxiosError;
      const errorMessage =
        (err.response?.data as string) ??
        "An error occured trying to log you in.";
      dispatch(showGenericErrorDialog(errorMessage));
      dispatch(finishedRequest());
    }
  };
}
