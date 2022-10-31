// o: adding Routes at the end of files in an api directory is redundant

const router = require("express").Router();
const {
  models: { User, Order, Order_Product, Product },
} = require("../db");

module.exports = router;

// GET api/order_products ------ LoggedIn user
// To render unchecked-out cart
// If user has fulfilled order, this route returns null or 500server error.
router.get("/:userId/cart", async (req, res, next) => {
  const userId = req.params.userId;
  try {
    const order = await Order.findOne({
      where: [{ userId: userId }, { status: "unfulfilled" }],
    });

    const ordersDets = await Order_Product.findAll({
      where: { orderId: order.id },
      include: { model: Product },
    });
    res.json(ordersDets);
  } catch (err) {
    next(err);
  }
});

// POST api/order_products------ LoggedIn user
// To use for add to cart button click
// MESSY BUT WORKS - NEED TO CLEAN UP
router.post("/:userId/cart", async (req, res, next) => {
  let userId = req.params.userId;
  let productId = +req.body.productId;

  try {
    const order = await Order.findOrCreate({
      where: { userId: userId, status: "unfulfilled" },
    });

    //const addProduct = Order.addProduct(req.params.productId)
    const addProduct = await Order_Product.findOrCreate({
      where: { productId: productId, orderId: order[0].id },
    });
    const addedIns = await Order_Product.findOne({
      where: { orderId: order[0].id, productId: productId },
      include: { model: Product },
    });
    if (!addProduct[1]) {
      await addedIns.increment("quantityInCart");

      await addedIns.reload();
    }
    res.json(addedIns);
  } catch (err) {
    next(err);
  }
});

// PUT api/order_products
// To change quantity of products which are added to cart from cart or singleProduct pages
router.put("/:userId/cart", async (req, res, next) => {
  const userId = req.params.userId;
  const productId = req.body.productId;
  const qty = req.body.quantityInCart;

  try {
    const order = await Order.findOne({
      where: [{ userId: userId }, { status: "unfulfilled" }],
    });

    const updatedOrder_product = await Order_Product.update(
      { quantityInCart: qty },
      {
        where: { productId: productId, orderId: order.id },
        returning: true,
        plain: true,
      }
    );
    res.json(updatedOrder_product[1]);
  } catch (err) {
    next(err);
  }
});

//  DELETE api/order_products
// To delete product row from Order_product if remove button is clicked
router.delete("/:userId/:productId/cart", async (req, res, next) => {
  const userId = req.params.userId;
  const productId = req.params.productId;

  try {
    const order = await Order.findOne({
      where: [{ userId: userId }, { status: "unfulfilled" }],
    });

    const updatedItem = await Order_Product.destroy({
      where: { productId: productId, orderId: order.id },
    });
    res.json(updatedItem); //only sends num of deletion back
  } catch (err) {
    next(err);
  }
});

// GET api/order_products ------ LoggedIn user
// To render order history
router.get("/:userId/history", async (req, res, next) => {
  const userId = req.params.userId;
  try {
    const orders = await Order.findAll({
      where: [{ userId: userId }, { status: "fulfilled" }],
    });

    // Resolve this for users with multiple fulfilled orders
    // const ordersDets = orders.map(async (order) => {
    //   await Order_Product.findAll({
    //     where: { orderId: order.id },
    //     include: { model: Product },
    //   });
    // });

    const ordersDets = await Order_Product.findAll({
      where: { orderId: orders[0].id },
      include: { model: Product },
    });
    res.json(ordersDets);
  } catch (err) {
    next(err);
  }
});
