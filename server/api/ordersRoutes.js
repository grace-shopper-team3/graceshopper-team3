const router = require("express").Router();
const {
  models: { User, Order, Order_Product, Product },
} = require("../db");

module.exports = router;

// o: this doesn't render anything, its an api endpoint that returns json
//  only the frontend renders to screen

// PUT api/orders
// To render checkout page on clicking checkout
router.put("/:userId/checkout", async (req, res, next) => {
  // o: you don't need to pass user id since you can get user id from req.user.id
  const userId = req.params.userId;

  try {
    // o: fulfill is not a good name, since you are only using the fulfill object
    //  you can just destructure 👉 const [, [order]] = await Order...
    const fulfill = await Order.update(
      { status: "fulfilled" },
      {
        where: { status: "unfulfilled", userId: userId },
        returning: true,
        plain: true,
      }
    );

    // o: orderDetails would be clearer than orderDets also you can just retreive
    //  the products from fulfill[1].getProducts() since they are associated together
    const orderDets = await Order_Product.findAll({
      where: { orderId: fulfill[1].id },
      include: { model: Product },
    });
    res.json(orderDets);
  } catch (err) {
    next(err);
  }
});
