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

module.exports = {
  db,
  models: {
    User,
    Product,
    Order,
    Order_Product,
  },
};
