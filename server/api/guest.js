// const router = require("express").Router();
// const {
//   models: { User, Order, Order_Product, Product },
// } = require("../db");
// const { getToken } = require("./adminCheckMiddleware");
// const TOKEN = "token";
// const token = window.localStorage.getItem(TOKEN);

// module.exports = router;

// // GET api/order_products ------ LoggedIn user
// // To render unchecked-out cart
// // If user has fulfilled order, this route returns null or 500server error.
// router.get("/:productId/cart", async (req, res, next) => {
//   const productId = req.params.productId;
//   try {
//     const product = await Product.findOne({
//       where: { id: productId },
//     });

//     const order = await Order.create({
//       where: { userId: -1, status: "unfulfilled" },
//     });

//     const order_products = await Order_Product.create({
//       where: { userId: -1, status: "unfulfilled" },
//     });

//     res.json(order);
//   } catch (err) {
//     next(err);
//   }
// });
