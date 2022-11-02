const router = require("express").Router();
const { getToken } = require("./adminCheckMiddleware");

const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_API_KEY);

module.exports = router;

router.post("/stripe/create-checkout-session", getToken, async (req, res) => {
  //const userId = req.user.id;
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
    success_url: `${process.env.PRODUCTION_URL}/checkout-success`,
    cancel_url: `${process.env.PRODUCTION_URL}/cart`,
  });

  res.send({ url: session.url });
});

// -------------  Before Deployment ----------------------
// success_url: `${process.env.PRODUCTION_URL}/checkout-success`,
// cancel_url: `${process.env.PRODUCTION_URL}/cart`,
