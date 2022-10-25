const router = require("express").Router();
const {
  models: { Product },
} = require("../db");
module.exports = router;

//GET/api/products
router.get("/", async (req, res, next) => {
  try {
    const allProducts = await Product.findAll();
    console.log("allProducts", allProducts);
    res.json(allProducts);
  } catch (err) {
    next(err);
  }
});
