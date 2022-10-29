//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Product = require("./models/Product");
const Order = require("./models/Order");
const Order_Product = require("./models/Order_Product");

//associations could go here!
User.hasMany(Order);
Order.belongsTo(User);
Product.belongsToMany(Order, { through: Order_Product });
Order.belongsToMany(Product, { through: Order_Product });
Order_Product.belongsTo(Order);
Order_Product.belongsTo(Product);

Product.filterByPriceHigher = async function (price) {
  const products = await Product.findAll();
  const filteredProducts = products.filter((element) => element.price >= price);
  return filteredProducts;
};

Product.filterByPriceLower = async function (price) {
  const products = await Product.findAll();
  const filteredProducts = products.filter((element) => element.price <= price);
  return filteredProducts;
};

Order.complete = function (userId) {
  return this.update(
    { status: "fulfilled" },
    { where: { status: "unfulfilled", userId: userId } }
  );
};

Order_Product.incrementQty = async function (productId, orderId) {
  return await this.update(
    { quantityInCart: quantityInCart + 1 },
    { where: [{ productId: productId }, { orderId: orderId }] }
  );
};

Order_Product.decrementQty = async function (productId, orderId) {
  const result = await this.update(
    { quantityInCart: quantityInCart - 1 },
    { where: [{ productId: productId }, { orderId: orderId }] }
  );

  return result;
};

module.exports = {
  db,
  models: {
    User,
    Product,
    Order,
    Order_Product,
  },
};
