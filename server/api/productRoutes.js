const router = require("express").Router();
const {
  models: { Product },
} = require("../db");
module.exports = router;

//GET/api/products
router.get("/", async (req, res, next) => {
  try {
    const allProducts = await Product.findAll();
    res.json(allProducts);
  } catch (err) {
    next(err);
  }
});

//GET/api/products/:productId
router.get("/:productId", async (req, res, next) => {
  try {
    const aProduct = await Product.findByPk(req.params.productId);
    res.json(aProduct);
  } catch (err) {
    next(err);
  }
});
