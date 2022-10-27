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
  subtotal: {
    type: Sequelize.VIRTUAL,
    get() {
      return this.price * this.quantityInCart;
    },
  },
});

module.exports = Order_Product;
