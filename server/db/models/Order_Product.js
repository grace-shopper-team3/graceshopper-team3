const Sequelize = require("sequelize");
const db = require("../db");

const Order_Product = db.define("order_product", {
  quantityInCart: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
  },
  subtotal: {
    type: Sequelize.VIRTUAL,
    // get() {
    //   return this.product.price * this.quantityInCart;
    // },
  },
});

module.exports = Order_Product;
