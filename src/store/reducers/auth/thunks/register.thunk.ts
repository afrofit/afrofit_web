import { AppThunk } from '../../../store';
import { AxiosError } from 'axios';

import {
  finishedRequest,
  hideGenericErrorDialog,
  newRequest,
  showGenericErrorDialog,
  showGenericSuccessDialog,
} from '../../ui/ui.slice';
import API_CLIENT from '../../../../api/client';
import { CreateUserRequestType } from '../../../../types/CreateUserRequestType';
import { storeUserToken } from '../auth.slice';
import { STORE_TOKEN } from '../../../../api/storage';
import { CreateStripeSession } from '../../payments/thunks/create-stripe-session.thunk';

const createUserApi = async (userData: CreateUserRequestType) => {
  return await API_CLIENT.post('users/create', userData);
};

export function CreateUser(
  userData: CreateUserRequestType,
  navigate: any,
  priceId: any
): AppThunk {
  return async (dispatch) => {
    try {
      dispatch(newRequest());
      dispatch(hideGenericErrorDialog());
      const response = await createUserApi(userData);
      // let userString = JSON.stringify(response?.data);
      // localStorage.setItem('userdata', userString);
      if (response && response.data) {
        dispatch(storeUserToken(response.data.token));
        STORE_TOKEN(response.data.token);
        dispatch(showGenericSuccessDialog('Your Registered Successfully'));
        if (!Boolean(priceId)) {
          navigate();
        } else {
          // sessionStorage.setItem('userId', response?.data?.id);
          dispatch(
            CreateStripeSession(
              response?.data?.id,
              response?.data?.email,
              priceId
            )
          );
        }
      }

      dispatch(finishedRequest());
      return response.config.data;
    } catch (error) {
      const err = error as AxiosError;
      const errorMessage =
        (err.response?.data as string) ??
        'An error occured trying to register your account.';
      dispatch(showGenericErrorDialog(errorMessage));
      dispatch(finishedRequest());
    }
  };
}
