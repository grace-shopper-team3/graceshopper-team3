const router = require("express").Router();
const {
  models: { Product },
} = require("../db");
module.exports = router;

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
    res.json(aProduct);
  } catch (err) {
    next(err);
  }
});

// POST/api/products   --------- Admin only
router.post("/", async (req, res, next) => {
  try {
    if (req.user && req.user.isAdmin) {
      const newProduct = await Product.create(req.body);
      res.status(201).json(newProduct);
    } else {
      res.status(401).json({ error: "Unauthorized" });
    }
  } catch (err) {
    next(err);
  }
});

// PUT/api/products   --------- Admin only
router.put("/:productId", async (req, res, next) => {
  try {
    if (req.user && req.user.isAdmin) {
      for (let key in req.body) {
        if (req.body[key] === "") {
          delete req.body[key];
        }
      }
      const product = await Product.findByPk(req.params.productId);

      const editProduct = await product.update(req.body);

      res.json(editProduct);
    } else {
      res.status(401).json({ error: "Unauthorized" });
    }
  } catch (err) {
    next(err);
  }
});

// DELETE api/products   --------- Admin only
router.delete("/:productId", async (req, res, next) => {
  try {
    if (req.user && req.user.isAdmin) {
      await Product.destroy({
        where: { id: req.params.productId },
      });
      res.status(200).send(req.params.productId);
    } else {
      res.status(401).json({ error: "Unauthorized" });
    }
  } catch (err) {
    next(err);
  }
});
