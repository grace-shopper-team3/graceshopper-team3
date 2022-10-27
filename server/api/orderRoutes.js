const router = require("express").Router();
const {
  models: { User, Order, Order_Product, Product },
} = require("../db");

module.exports = router;

router.get("/:userId/cart", async (req, res, next) => {
  try {
    const orderDets = await Order_Product.findAll({
      where: { orderId: req.params.orderId },
      include: { model: Product },
    });

    res.json(orderDets);
  } catch (err) {
    next(err);
  }
});

// TASNIM WORKING ON THIS
// router.get("/:userId/products",()

// router.get()

// router.post("/:id/products/:productId", async (req, res, next) => {
//   try {
//     const userId = req.params.id;
//     const productId = req.params.productId;

//     const order = await Order.create({
//       userId: userId,
//       status: "unfulfilled",
//     });

//     const order_product = await Order_Product.create({
//       productId: productId,
//       orderId: order.id,
//       // quantity
//       // price:
//     });

//     res.json(order);
//     //res.json(order_product);
//   } catch (err) {
//     next(err);
//   }
// });
