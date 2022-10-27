/* global describe beforeEach it */

const { expect } = require("chai");
const {
  db,
  models: { Product, Order_Product },
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
      console.log("CHECK", orderTwo);
      expect(orderOne).to.have.length(2);
      expect(orderTwo).to.have.length(1);
    });
  });

  xdescribe("containsProductPrice", function () {
    it("should contain product details associated with order", async function () {
      const some_order = await Order_Product.findByPk(1, {
        include: { model: Product },
      });
      console.log("SOME_ORDER", "HELLO");
      //expect(some_order.products.price).to.equal(4.0);
    });
  });
});
