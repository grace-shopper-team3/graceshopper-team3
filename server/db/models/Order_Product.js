const Sequelize = require("sequelize");
const db = require("../db");

const Order_Product = db.define("order_product", {
  quantityInCart: {
    type: Sequelize.INTEGER,
  },
  subtotal: {
    type: Sequelize.DECIMAL(10, 2),
    validate: {
      min: 0,
    },
  },
});

module.exports = Order_Product;
