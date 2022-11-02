const router = require("express").Router();
const {
  models: { User, Order, Order_Product, Product },
} = require("../db");
const { getToken } = require("./adminCheckMiddleware");

module.exports = router;

// GET api/orders ------ LoggedIn user
// To render order history
router.get("/history", getToken, async (req, res, next) => {
  const userId = req.user.id;
  try {
    const orders = await Order.findAll({
      where: { userId: userId, status: "fulfilled" },
    });

    const ordersDetails = await Promise.all(
      orders.map((order) => order.getProducts())
    );
    res.json(ordersDetails);
  } catch (err) {
    next(err);
  }
});

// PUT api/orders
// To render checkout page on clicking pay
router.put("/checkout-success", getToken, async (req, res, next) => {
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
