const Sequelize = require("sequelize");
const db = require("../db");

const Order_Product = db.define("order_product", {
  quantityInCart: {
    type: Sequelize.INTEGER,
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      notEmpty: true,
      min: 0,
    },
  },
  // o: what is the difference between subtotal and price... let's chat about
  //  this during our Sprint Meeting
  subtotal: {
    type: Sequelize.DECIMAL(10, 2),
  },
});

module.exports = Order_Product;
