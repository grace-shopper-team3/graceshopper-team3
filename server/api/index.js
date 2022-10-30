const router = require("express").Router();
module.exports = router;

router.use("/users", require("./users"));
router.use("/products", require("./productsRoutes"));
router.use("/orders", require("./ordersRoutes"));
router.use("/order_products", require("./order_productsRoutes"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
