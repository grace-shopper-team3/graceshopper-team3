const router = require("express").Router();
const {
  models: { User, Order, Order_Product, Product },
} = require("../db");
const { getToken } = require("./adminCheckMiddleware");

// require("dotenv").config();
const Stripe = require("stripe");
//const stripe = Stripe(process.env.STRIPE_API_KEY);
const stripe = Stripe(
  "sk_test_51LzAWjIdadgQxEeI56jNMpHVxheAWbyIOcJKy32i1oIj6xjAeHitfd1TdEW23i2Zmea8XQYZefy8ZNqHwVij66vc00n1Vi5Bpk"
);

module.exports = router;

// POST api/payment
// To render payment page on clicking checkout
router.post("/stripe/create-checkout-session", getToken, async (req, res) => {
  const userId = req.user.id;
  const line_items = req.body.cart.map((item) => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.product.name,
          images: [item.product.imageUrl],
        },
        unit_amount: +item.product.price * 100,
      },
      quantity: item.quantityInCart,
    };
  });
  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    success_url: `http://localhost:8080/checkout-success`,
    cancel_url: `http://localhost:8080/cart`,
  });

  res.send({ url: session.url });
});

// for deployment
// success_url: `${process.env.SERVER_URL}/checkout-success`,
// cancel_url: `${process.env.SERVER_URL}/cart`,

//.env
// STRIPE_API_KEY =
// sk_test_51LzAWjIdadgQxEeI56jNMpHVxheAWbyIOcJKy32i1oIj6xjAeHitfd1TdEW23i2Zmea8XQYZefy8ZNqHwVij66vc00n1Vi5Bpk
// SERVER_URL = http://localhost:8080 or //https://team3.onrender.com
// NODE_ENV = development
