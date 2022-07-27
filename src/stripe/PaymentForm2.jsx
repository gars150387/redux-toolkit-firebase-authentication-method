import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import QRCode from "react-qr-code";
import { CustomerReceipt } from "../components/CustomerReceipt";

const initialState = 1;

export const PaymentForm2 = () => {
  const [deviceNumber, setDeviceNumber] = useState(initialState);

  const [valueId, setValueId] = useState("");

  const handleDeviceNumberIncrease = (event) => {
    event.preventDefault();
    setDeviceNumber(deviceNumber + 1);
  };

  const handleDeviceNumberDecrease = (event) => {
    event.preventDefault();
    setDeviceNumber(deviceNumber - 1);

    if (deviceNumber === 1) {
      return setDeviceNumber(initialState);
    }
  };

  const handleDeviceNumberReset = (event) => {
    event.preventDefault();
    setDeviceNumber(initialState);
  };

  const stripe = useStripe();

  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    console.log(paymentMethod);

    if (!error) {
      const { id } = paymentMethod;

      const { data } = await axios.post("http://localhost:3001/api/checkout", {
        id,
        amount: deviceNumber * 200 * 100,
      });

      console.log(data);

      if (id) {
        return setValueId(id);
      }
    }
  };

  return (
    <>
      <div className="container-fluid" style={{ width: "80vw" }}>
        <div
          className="my-5"
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <button onClick={handleDeviceNumberDecrease}>-</button>
          <div> {deviceNumber} </div>
          <button onClick={handleDeviceNumberIncrease}>+</button>
          <button onClick={handleDeviceNumberReset}>Reset</button>
        </div>
        <div className="my-5">Deposit: ${deviceNumber * 200}.00</div>

        <CardElement />
        <button className="my-3" onClick={handleSubmit}>
          Authorization
        </button>
      </div>
      {valueId === "" ? (
        <div style={{ display: 'none'}}></div>
      ) : (
        <div>
          <QRCode value={`https://dashboard.stripe.com/test/payments/${valueId}`} />
          {
            console.log("valueId", valueId)
          }
        </div>
      )}
    </>
  );
};
