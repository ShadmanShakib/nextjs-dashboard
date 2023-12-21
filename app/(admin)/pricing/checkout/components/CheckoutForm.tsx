"use client";
import React from "react";
import { PaymentElement } from "@stripe/react-stripe-js";
type Props = {};

function CheckoutForm({}: Props) {
  return (
    <div>
      <form>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default CheckoutForm;
