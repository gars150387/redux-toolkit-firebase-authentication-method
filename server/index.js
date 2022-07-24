const express = require("express");
require("dotenv").config()
const Stripe = require("stripe"); //("sk_test_51LOVwRD3lviUp8QGys5VcCpQMGjWbFrfle0iAsh3OZE0W9bbCzi4JkogtJkXGOHBFA5zUgfripKYt2k5uaiibnXZ00R2DfRLGU") //process.env.STRIPE_SECRET_TEST
const cors = require("cors");
const app = express();

const stripe = new Stripe.Stripe(process.env.STRIPE_SECRET_TEST);

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.post("/api/checkout", async (req, res) => {
  try {
    const { id, amount } = req.body;

    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Device",
      payment_method: id,
      capture_method: "manual",
      confirm: true,
    });

    // const intent = await stripe.paymentIntents.capture( id, amount )

    console.log(payment);

    res.send({
      message: "Successfull payment",
      id,
      amount,
    });
  } catch (error) {
    console.log(error);
    res.json({ message: error });
  }
});

app.listen(3001, () => {
  console.log("Server on port", 3001);
});
