import { SUBSCRIPTION_PRODUCT_1 } from "./../../src/constants.config";
import * as functions from "firebase-functions";
import Stripe from "stripe";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

export const createStripeCheckout = functions.https.onCall(
  async (data, context) => {
    const stripe = new Stripe(functions.config().stripe.secret_key, {
      apiVersion: "2022-08-01",
    });
    // const stripe = require("stripe")(functions.config().stripe.secret_key)
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      success_url: "https://localhost:3001/pay/success",
      cancel_url: "https://localhost:3001/pay/failure",
      line_items: [
        {
          quantity: 1,
          price: SUBSCRIPTION_PRODUCT_1,
          //   price_data: {
          //     currency: "gbp",
          //     unit_amount: 2.99 * 100,
          //     product_data: {
          //       name: "Premium subscription",
          //     },
          //   },
        },
      ],
    });

    return { id: session.id };
  }
);
