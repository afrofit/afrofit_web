import { AppThunk } from "../../../store";
import { AxiosError } from "axios";

import {
  finishedRequest,
  hideGenericErrorDialog,
  newRequest,
  showGenericErrorDialog,
} from "../../ui/ui.slice";
import API_CLIENT from "../../../../api/client";
import { CreateUserRequestType } from "../../../../types/CreateUserRequestType";
import { storeUserToken } from "../auth.slice";
import { STORE_TOKEN } from "../../../../api/storage";

const createUserApi = async (userData: CreateUserRequestType) => {
  return await API_CLIENT.post("users/create", { ...userData });
};

export function CreateUser(userData: CreateUserRequestType): AppThunk {
  return async (dispatch) => {
    try {
      dispatch(newRequest());
      dispatch(hideGenericErrorDialog());

      const response = await createUserApi(userData);

      if (response && response.data) {
        dispatch(storeUserToken(response.data.token));
        STORE_TOKEN(response.data.token);
      } else {
      }

      dispatch(finishedRequest());
    } catch (error: any) {
      const err = error as AxiosError;
      dispatch(showGenericErrorDialog(err.response?.data as string));
      dispatch(finishedRequest());
    }
  };
}
