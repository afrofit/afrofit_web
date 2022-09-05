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
import { STRIPE_PUBLISHABLE_KEY } from "../../../../constants.config";

const createStripeSessionApi = async (userId: string, email: string) => {
  return await API_CLIENT.post(`payments/create-stripe-session/${userId}`, {
    email,
  });
};

let stripePromise: Promise<Stripe | null>;
const getStripe = async () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      process.env.STRIPE_PUBLISHABLE_KEY ?? STRIPE_PUBLISHABLE_KEY
    );
  }
  return stripePromise;
};

console.log(
  "process.env.STRIPE_PUBLISHABLE_KEY",
  process.env.STRIPE_PUBLISHABLE_KEY,
  "STRIPE_PUBLISHABLE_KEY",
  STRIPE_PUBLISHABLE_KEY
);

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
          }
        };
        redirectToCheckout();
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
