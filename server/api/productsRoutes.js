const router = require("express").Router();
const {
  models: { Product },
} = require("../db");
module.exports = router;
const { getToken } = require("./adminCheckMiddleware");

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
    // o: check not found
    const aProduct = await Product.findByPk(req.params.productId);
    res.json(aProduct);
  } catch (err) {
    next(err);
  }
});

// POST/api/products   --------- Admin only
router.post("/", getToken, async (req, res, next) => {
  try {
    if (req.user.isAdmin) {
      const newProduct = await Product.create(req.body);
      res.status(201).json(newProduct);
    } else {
      res.status(403).json({ error: "Unauthorized" });
    }
  } catch (err) {
    next(err);
  }
});

// PUT/api/products   --------- Admin only
router.put("/:productId", getToken, async (req, res, next) => {
  try {
    // o: you are doing this in two places it seems
    if (req.user.isAdmin) {
      for (let key in req.body) {
        if (req.body[key] === "") {
          delete req.body[key];
        }
      }

      // o: check for not found
      const product = await Product.findByPk(req.params.productId);

      const editProduct = await product.update(req.body);

      res.json(editProduct);
    } else {
      res.status(403).json({ error: "Unauthorized" });
    }
  } catch (err) {
    next(err);
  }
});

// DELETE api/products   --------- Admin only
router.delete("/:productId", getToken, async (req, res, next) => {
  try {
    if (req.user.isAdmin) {
      // o: what about when productId is not found???
      await Product.destroy({
        where: { id: req.params.productId },
      });
      res.status(200).send(req.params.productId);
    } else {
      res.status(403).json({ error: "Unauthorized" });
    }
  } catch (err) {
    next(err);
  }
});
