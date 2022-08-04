import { AppThunk } from "../../../store";
import { AxiosError } from "axios";

import {
  finishedRequest,
  hideGenericErrorDialog,
  newRequest,
  showGenericErrorDialog,
} from "../../ui/ui.slice";
import API_CLIENT from "../../../../api/client";
import { storeUserToken, updateUserDisplayPic } from "../auth.slice";
import { STORE_TOKEN } from "../../../../api/storage";

const updateUserDpApi = async (userId: string, displayPicId: number) => {
  return await API_CLIENT.post(`users/update-dp/${userId}`, { displayPicId });
};

export function UpdateUserDp(userId: string, displayPicId: number): AppThunk {
  return async (dispatch) => {
    try {
      dispatch(newRequest());
      dispatch(hideGenericErrorDialog());

      const response = await updateUserDpApi(userId, displayPicId);

      if (response && response.data) {
        dispatch(storeUserToken(response.data.token));
        dispatch(updateUserDisplayPic(displayPicId));
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
