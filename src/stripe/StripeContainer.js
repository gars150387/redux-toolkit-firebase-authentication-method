import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { PaymentForm2 } from "./PaymentForm2";

const public_key =
  "pk_test_51LOVwRD3lviUp8QG0eobzZIG6nFdoGVVmy7oJnqqIqkle5r1doJnfdLKDd2F2HRWYwhYt554rdNWYdGhu5UtAtiH00wbYftlUi";

const stripeTestPromise = loadStripe(public_key);

export const StripeContainer = () => {
  return (
    <>
      <Elements stripe={stripeTestPromise}>
        <PaymentForm2 />
      </Elements>
    </>
  );
};
