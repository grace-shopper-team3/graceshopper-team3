const Sequelize = require("sequelize");
const db = require("../db");

const Product = db.define("product", {
  name: {
    type: Sequelize.STRING,
    unique: false,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
  imageUrl: {
    type: Sequelize.STRING,
    default:
      "https://media.gamestop.com/i/gamestop/11113248/Funko-POP-Foldable-Protector-5-Pack",
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      notEmpty: true,
      min: 0,
    },
  },
  category: {
    type: Sequelize.STRING,
  },
  quantity: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Product;
