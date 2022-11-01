const router = require("express").Router();
const {
  models: { Product },
} = require("../db");
module.exports = router;
const { getToken, isAdmin } = require("./adminCheckMiddleware");

// GET/api/products
router.get("/", async (req, res, next) => {
  try {
    const allProducts = await Product.findAll();
    res.json(allProducts);
  } catch (err) {
    next(err);
  }
});

// GET/api/products/:productId
router.get("/:productId", async (req, res, next) => {
  try {
    const aProduct = await Product.findByPk(req.params.productId);
    if (aProduct) {
      res.json(aProduct);
    } else {
      res.json({ error: "Product not found" });
    }
  } catch (err) {
    next(err);
  }
});

// POST/api/products   --------- Admin only
router.post("/", getToken, isAdmin, async (req, res, next) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (err) {
    next(err);
  }
});

// PUT/api/products   --------- Admin only
router.put("/:productId", getToken, isAdmin, async (req, res, next) => {
  try {
    for (let key in req.body) {
      if (req.body[key] === "") {
        delete req.body[key];
      }
    }
    const product = await Product.findByPk(req.params.productId);

    if (product) {
      const editProduct = await product.update(req.body);
      res.json(editProduct);
    } else {
      res.json({ error: "Product not found" });
    }
  } catch (err) {
    next(err);
  }
});

// DELETE api/products   --------- Admin only
router.delete("/:productId", getToken, isAdmin, async (req, res, next) => {
  const productId = req.params.productId;
  try {
    const deleteProduct = await Product.destroy({
      where: { id: productId },
    });
    if (deleteProduct === 1) {
      res.status(200).json(productId);
    } else {
      res.json({ error: "Product not found" });
    }
  } catch (err) {
    next(err);
  }
});
