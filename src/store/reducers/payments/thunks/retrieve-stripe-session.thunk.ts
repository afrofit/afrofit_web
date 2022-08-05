import { AppThunk } from "../../../store";
import { AxiosError } from "axios";

import {
  finishedRequest,
  hideGenericErrorDialog,
  newRequest,
  showGenericErrorDialog,
} from "../../ui/ui.slice";
import API_CLIENT from "../../../../api/client";
import { storeUserStripeSession } from "../../auth/auth.slice";
import { StripeSessionDataType } from "../../../../types/StripeSessionDataType";

const retrieveStripeSessionApi = async (userId: string, sessionId: string) => {
  return await API_CLIENT.post(`payments/retrieve-stripe-session/${userId}`, {
    sessionId,
  });
};

export function RetrieveStripeSession(
  userId: string,
  sessionId: string
): AppThunk {
  return async (dispatch) => {
    try {
      dispatch(newRequest());
      dispatch(hideGenericErrorDialog());

      const response = await retrieveStripeSessionApi(userId, sessionId);

      if (response && response.data) {
        const { session } = response.data;

        const trimmedData: StripeSessionDataType = {
          id: session.id,
          totalAmount: session.amount_total,
          currency: session.currency,
          expiresAt: session.expires_at,
          paymentStatus: session.payment_status,
          status: session.status,
          subscriptionId: session.subscription,
          customerDetails: {
            customerId: session.customer,
            email: session.customer_email,
            ...(session.customer_details.address && {
              address: {
                ...(session.customer_details.address.city && {
                  city: session.customer_details.address.city,
                }),
                ...(session.customer_details.address.country && {
                  country: session.customer_details.address.country,
                }),
                ...(session.customer_details.address.line1 && {
                  line1: session.customer_details.address.line1,
                }),
                ...(session.customer_details.address.line2 && {
                  line2: session.customer_details.address.line2,
                }),
                ...(session.customer_details.address.postalCode && {
                  postalCode: session.customer_details.address.postal_code,
                }),
                ...(session.customer_details.address.state && {
                  state: session.customer_details.address.state,
                }),
              },
            }),
            name: session.customer_details.name,
            ...(session.customer_details.phone && {
              phone: session.customer_details.phone,
            }),
          },
        };

        dispatch(storeUserStripeSession(trimmedData));
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
