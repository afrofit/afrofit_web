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

const STRIPE_PUBLISHABLE_KEY =
  "pk_live_51LND6dG7Ijvv33NL0x0geQt3CMvxFgb787YfgUUdrIueMOCh51eUfOGxCYmYS2XWkFZPmL98rb77PcTUhyirgCN9004jfaKgGU";

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
      console.log("response", response);

      if (response && response.data) {
        console.log(`response: ${JSON.stringify(response.data)}`);
        const { sessionId } = response.data;
        const redirectToCheckout = async () => {
          try {
            sessionStorage.setItem("userId", userId);
            const stripe = await getStripe();

            if (stripe) {
              const result = stripe.redirectToCheckout({
                sessionId: sessionId,
              });
              console.log("result", result);
              return result;
            }
          } catch (error) {
            console.log("error log", error);
            dispatch(showGenericErrorDialog("There was an error with Stripe"));
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
        "An error occured trying to create a stripe session.";
      dispatch(showGenericErrorDialog(errorMessage));
      dispatch(finishedRequest());
    }
  };
}
