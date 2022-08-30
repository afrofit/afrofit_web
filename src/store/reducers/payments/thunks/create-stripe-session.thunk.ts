import { AppThunk } from "../../../store";
import { AxiosError } from "axios";
import { loadStripe, Stripe } from "@stripe/stripe-js";

import {
  finishedRequest,
  hideGenericErrorDialog,
  newRequest,
  showGenericErrorDialog,
} from "../../ui/ui.slice";
import API_CLIENT from "../../../../api/client";

const createStripeSessionApi = async (userId: string, email: string) => {
  return await API_CLIENT.post(`payments/create-stripe-session/${userId}`, {
    email,
  });
};

let stripePromise: Promise<Stripe | null>;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY!);
  }
  return stripePromise;
};

export function CreateStripeSession(userId: string, email: string): AppThunk {
  return async (dispatch) => {
    try {
      dispatch(newRequest());
      dispatch(hideGenericErrorDialog());

      const response = await createStripeSessionApi(userId, email);

      if (response && response.data) {
        console.log("SessionID", response.data);
        const { sessionId } = response.data;

        const redirectToCheckout = async () => {
          try {
            const stripe = await getStripe();
            if (stripe) {
              const result = stripe.redirectToCheckout({
                sessionId: sessionId,
              });

              console.log("result", result);
              return result;
            }
          } catch (error) {
            console.error(error);
            dispatch(showGenericErrorDialog("There was an error with Stripe"));
            // dispatch(showGenericErrorDialog("There was an error with Stripe"));
          }
        };
        redirectToCheckout();

        // dispatch(storeUserToken(response.data.token));
        // dispatch(updateUserDisplayPic(displayPicId));
        // STORE_TOKEN(response.data.token);
      } else {
      }

      dispatch(finishedRequest());
    } catch (error: any) {
      const err = error as AxiosError;
      const errorMessage =
        (err.response?.data as string) ??
        "An error occured trying to create a stripe session.";
      dispatch(showGenericErrorDialog(errorMessage));
      dispatch(finishedRequest());
    }
  };
}
