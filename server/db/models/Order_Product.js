const Sequelize = require("sequelize");
const db = require("../db");

const Order_Product = db.define("order_product", {
  quantityInCart: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
    validate: {
      min: 1,
    },
  },

  // COMMENTS : ERROR WHEN SEEDING
  // subtotal: {
  //   type: Sequelize.DECIMAL(10, 2),
  //   set(val = 0) {
  //     return this.setDataValue(
  //       "subtotal",
  //       this.product.price * this.quantityInCart + val
  //     );
  //   },

  // COMMENTS : ERROR IN POST ROUTE FOR ADDTOCART
  // type: Sequelize.VIRTUAL,
  // get() {
  //   this.product.price * this.quantityInCart;
  // },
  //},
});

module.exports = Order_Product;
