import { AppThunk } from '../../../store';
import { AxiosError } from 'axios';

import {
  finishedRequest,
  hideGenericErrorDialog,
  newRequest,
  showGenericErrorDialog,
} from '../../ui/ui.slice';
import API_CLIENT from '../../../../api/client';
import { setIsSubscribed } from '../../auth/auth.slice';

const cancelUserSubscriptionApi = async (userId: string) => {
  return await API_CLIENT.post(`payments/cancel-user-subscription/${userId}`);
};

export function CancelUserSubscription(userId: string): AppThunk {
  return async (dispatch) => {
    try {
      dispatch(newRequest());
      dispatch(hideGenericErrorDialog());

      const response = await cancelUserSubscriptionApi(userId);

      if (response && response.data) {
        const { activeSubscription } = response.data;
        sessionStorage.setItem('isSubscribed', activeSubscription);
        dispatch(setIsSubscribed(activeSubscription));
      } else {
      }

      dispatch(finishedRequest());
    } catch (error: any) {
      const err = error as AxiosError;
      const errorMessage =
        (err.response?.data as string) ??
        'An error occured trying to cancel your subscription.';
      dispatch(showGenericErrorDialog(errorMessage));
      dispatch(finishedRequest());
    }
  };
}
