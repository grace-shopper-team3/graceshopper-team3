/* global describe beforeEach it */

const { expect } = require("chai");
const request = require("supertest");
const {
  db,
  models: { Order },
} = require("../db");
const seed = require("../../script/seed");
const app = require("../app");

describe("Order routes", () => {
  beforeEach(async () => {
    await seed();
  });

  describe("/api/orders/-success", () => {
    it("GET /api/orders/checkout-success", async () => {
      //Here we want to test that before an Order is submitted, a user will have an
      //unfufilled order. And after they will have no unfulfilled orders, AND one more fufilled order than they had before.
      //const res = await request(app).get("/api/products").expect(200);

      expect(res.body).to.be.an("array");
      expect(res.body.length).to.equal(10);
    }); // end describe('/api/orders/userId/checkout-success')
  }); // end describe('/api/order/:userId/checkout-success')
}); // end describe('Order routes')
