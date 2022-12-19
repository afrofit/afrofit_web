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

const updateUserDpApi = async (userId: string, displayPicId: any) => {
  return await API_CLIENT.post(`users/update-dp/${userId}`, displayPicId);
};

export function UpdateUserDp(userId: string, displayPicId: any): AppThunk {
  return async (dispatch) => {
    try {
      dispatch(newRequest());
      dispatch(hideGenericErrorDialog());
      
      const response = await updateUserDpApi(userId, displayPicId);
      
      if (response && response.data) {
        dispatch(storeUserToken(response.data.token));
        dispatch(updateUserDisplayPic(response.data.data));
        STORE_TOKEN(response.data.token);
      } else {
      }

      dispatch(finishedRequest());
    } catch (error: any) {
      const err = error as AxiosError;
      const errorMessage =
        (err.response?.data as string) ??
        "An error occured trying to update your display picture.";
      dispatch(showGenericErrorDialog(errorMessage));
      dispatch(finishedRequest());
    }
  };
}
