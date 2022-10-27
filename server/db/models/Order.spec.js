/* global describe beforeEach it */

const { expect } = require("chai");
const {
  db,
  models: { Order },
} = require("../index");
const seed = require("../../../script/seed");

describe("Order model", () => {
  let orders;
  beforeEach(async () => {
    orders = (await seed()).orders;
  });

  describe("complete order", function () {
    it("sets an order's status to fulfilled.", async function () {
      await Order.complete(1);

      const completedOrder = await Order.findAll({
        where: { status: "fulfilled" },
      });
      expect(completedOrder).to.have.length(2);
    });
  });
}); // end describe('Order model')
