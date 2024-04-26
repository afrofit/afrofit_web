import { AppThunk } from '../../../store';
import { AxiosError } from 'axios';
import { loadStripe, Stripe } from '@stripe/stripe-js';

import {
  finishedRequest,
  hideGenericErrorDialog,
  newRequest,
  showGenericErrorDialog,
} from '../../ui/ui.slice';
import API_CLIENT from '../../../../api/client';

const createStripeSessionApi = async (
  userId: string,
  email: string,
  priceId: string
) => {
  return await API_CLIENT.post(`payments/create-stripe-session/${userId}`, {
    email,
    priceId,
  });
};
// live ni Keys

const STRIPE_PUBLISHABLE_KEY =
  'pk_live_51LND6dG7Ijvv33NL0x0geQt3CMvxFgb787YfgUUdrIueMOCh51eUfOGxCYmYS2XWkFZPmL98rb77PcTUhyirgCN9004jfaKgGU';

//  normAL KEY
// neel
// const STRIPE_PUBLISHABLE_KEY =
//   'pk_test_51MC0LySDRiBpbKJAVFMhNmB8cbDYJNOUI77xWNbwrm8cxmGF3rhSushliKGSo68Vn6vREfWKKblr3Sjve0S8NTRG00Yq5xx3XI';

// const STRIPE_PUBLISHABLE_KEY =
//   'pk_test_51LND6dG7Ijvv33NL5ryIwdwRa4w79lsHpXG7hXrNWkEU1XERXdNv6bVfsILkmRAYkdwya4ff8pNh9g7jivTXrMH000me9poxmB';

let stripePromise: Promise<Stripe | null>;
const getStripe = async () => {
  if (!stripePromise) {
    stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
};

export function CreateStripeSession(
  userId: string,
  email: string,
  priceId: string
): AppThunk {
  return async (dispatch) => {
    try {
      dispatch(newRequest());
      dispatch(hideGenericErrorDialog());
      const response = await createStripeSessionApi(userId, email, priceId);
      // console.log('response :>> ', response);
      if (response && response.data) {
        const { sessionId } = response.data;

        const redirectToCheckout = async () => {
          try {
            sessionStorage.setItem('userId', userId);
            const stripe = await getStripe();
            // console.log('stripe :>> ', stripe);
            if (stripe) {
              const result = stripe.redirectToCheckout({
                sessionId: sessionId,
              });
              return result;
            }
          } catch (error) {
            dispatch(showGenericErrorDialog('There was an error with Stripe'));
          }
        };
        redirectToCheckout();
      } else {
      }

      dispatch(finishedRequest());
    } catch (error) {
      const err = error as AxiosError;
      const errorMessage =
        (err.response?.data as string) ??
        'An error occured trying to create a stripe session.';
      dispatch(showGenericErrorDialog(errorMessage));
      dispatch(finishedRequest());
    }
  };
}
