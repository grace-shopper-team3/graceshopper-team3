const Sequelize = require("sequelize");
const db = require("../db");

const Order = db.define("order", {
  status: {
    type: Sequelize.ENUM("unfulfilled", "fulfilled"),
  },
  userId: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Order;
