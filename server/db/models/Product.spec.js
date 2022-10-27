/* global describe beforeEach it */

const { expect } = require("chai");
const {
  db,
  models: { Product },
} = require("../index");
const seed = require("../../../script/seed");

describe("Product model", () => {
  let products;
  beforeEach(async () => {
    products = (await seed()).products;
  });

  describe("filterByPrice", function () {
    it("filters by price, either higher or lower.", async function () {
      const higherCheck = await Product.filterByPriceHigher(100);
      const lowerCheck = await Product.filterByPriceLower(100);

      expect(higherCheck).to.have.length(1);
      expect(lowerCheck).to.have.length(9);
    });
  });
}); // end describe('Product model')
