const router = require("express").Router();
const {
  models: { User, Order, Order_Product, Product },
} = require("../db");

module.exports = router;

// PUT api/orders
// To render checkout page on clicking checkout
router.put("/:userId/checkout", async (req, res, next) => {
  const userId = req.params.userId;

  try {
    const fulfill = await Order.update(
      { status: "fulfilled" },
      {
        where: { status: "unfulfilled", userId: userId },
        returning: true,
        plain: true,
      }
    );

    const orderDets = await Order_Product.findAll({
      where: { orderId: fulfill[1].id },
      include: { model: Product },
    });
    res.json(orderDets);
  } catch (err) {
    next(err);
  }
});
