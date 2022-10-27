/* global describe beforeEach it */

// o: good work attempting to create tests 🙂
const { expect } = require("chai");
const {
  db,
  models: { User, Order, Product, Order_Product },
} = require("../index");
const seed = require("../../../script/seed");

describe("Order_Product model", () => {
  let order_products;
  beforeEach(async () => {
    order_products = (await seed()).order_products;
  });

  describe("findOrderById", function () {
    it("finds all orders_products by orderId ", async function () {
      const orderOne = await Order_Product.findAll({
        where: { orderId: 1 },
      });
      const orderTwo = await Order_Product.findAll({
        where: { orderId: 2 },
      });

      expect(orderOne).to.have.length(2);
      expect(orderTwo).to.have.length(1);
    });
  });
});
