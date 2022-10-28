const router = require("express").Router();
const {
  models: { User, Order, Order_Product, Product },
} = require("../db");

module.exports = router;

// GET api/orders ------ LoggedIn user
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

// GET api/orders_products ------ LoggedIn user
// To render unchecked-out cart
// If user has fulfilled order, this route returns null or 500server error.
// router.get("/:orderId/cart", async (req, res, next) => {
//   const userId = req.params.userId;
//   try {
//     const ordersDets = await Order_Product.findAll({
//       where: { orderId: order.id },
//       include: { model: Product },
//     });
//     res.json(ordersDets);
//   } catch (err) {
//     next(err);
//   }
// });

// GET api/orders_product ------ LoggedIn user
// To render order history
router.get("/:userId/history", async (req, res, next) => {
  const userId = req.params.userId;
  try {
    const orders = await Order.findAll({
      where: [{ userId: userId }, { status: "fulfilled" }],
    });

    // Resolve this for users with multiple fulfilled orders
    // const orderDets = orders.map(async (order) => {
    //   await Order_Product.findAll({
    //     where: { orderId: order.id },
    //     include: { model: Product },
    //   });
    // });

    const ordersDets = await Order_Product.findOne({
      where: { orderId: orders[0].id },
      include: { model: Product },
    });

    res.json(ordersDets);
  } catch (err) {
    next(err);
  }
});

// POST api/orders_product ------ LoggedIn user
// To use for add to cart button click
router.post("/:userId/cart", async (req, res, next) => {
  let userId = req.params.userId;
  let productId = req.body.productId;

  try {
    const existingOrder = await Order.findOne({
      where: [{ userId: userId }, { status: "unfulfilled" }],
    });

    if (existingOrder !== null) {
      //const addProduct = Order.addProduct(req.params.productId)
      const addProduct = await Order_Product.create({
        productId: productId,
        orderId: existingOrder.id,
      });
      res.json(addProduct);
    } else {
      const newOrder = await Order.create({
        //put this in order route specifically
        userId: userId,
        status: "unfulfilled",
      });

      const newOrder_product = await Order_Product.create({
        productId: productId,
        orderId: newOrder.id,
      });
      res.json(newOrder_product);
    }
  } catch (err) {
    next(err);
  }
});

// PUT api/orders
// To render checkout page on clicking checkout
router.put("/:userId/checkout", async (req, res, next) => {
  const userId = req.params.userId;

  try {
    const fulfill = await Order.complete(userId);

    const completedOrder = await Order.findAll({
      where: { orderId: fulfill.id },
      include: { model: Product },
    });
    res.json(completedOrder);
  } catch (err) {
    next(err);
  }
});

// PUT api/orders
// To change quantity of products which are added to cart from cart or singleProduct pages
router.put("/:userId", async (req, res, next) => {
  const userId = req.params.userId;
  const productId = req.body.productId;
  const qty = req.body.quantityInCart;

  try {
    const order = await Order.findOne({
      userId: userId,
      status: "unfulfilled",
    });

    const updatedOrder_product = await Order_Product.update(
      {
        quantityInCart: qty,
      },
      { where: [{ productId: productId }, { orderId: order.id }] }
    );
    res.json(updatedOrder_product);
  } catch (err) {
    next(err);
  }
});

//  DELETE api/orders
// To delete product row from Order_product if qty hits 0 & if remove button is clicked
//Need to think how to delete product of qty is 0
router.delete("/:userId", async (req, res, next) => {
  const userId = req.params.userId;
  const productId = req.body.productId;

  try {
    const order = await Order.findOne({
      userId: userId,
      status: "unfulfilled",
    });
    const updatedItem = await Order_Product.destroy({
      where: [{ productId: productId }, { orderId: order.id }],
    });
    res.json(updatedItem);
  } catch (err) {
    next(err);
  }
});
