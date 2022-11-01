const router = require("express").Router();
const {
  models: { User, Order, Order_Product, Product },
} = require("../db");
const { getToken } = require("./adminCheckMiddleware");

module.exports = router;


// PUT api/orders
// To render checkout page on clicking checkout
router.put("/checkout", getToken, async (req, res, next) => {
  const userId = req.user.id;

  try {
    const [, order] = await Order.update(
      { status: "fulfilled" },
      {
        where: { status: "unfulfilled", userId: userId },
        returning: true,
        plain: true,
      }
    );

    const orderDetails = await order.getProducts();
    res.json(orderDetails);
  } catch (err) {
    next(err);
  }
});
