const Sequelize = require("sequelize");
const db = require("../db");

const Order = db.define("order", {
  status: Sequelize.ENUM("unfulfilled", "fulfilled"),
});

module.exports = Order;
