import React from "react";
import { Link, useNavigate } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div class="row">
            <div class="col-md-12">
              {/* <div class="card"> */}
              <div class="card-body cart">
                <div class="col-sm-12 empty-cart-cls text-center">
                  <img
                    src="https://i.imgur.com/OgIZ3P3.png"
                    width="330"
                    height="330"
                    class="img-fluid mb-4 mr-3"
                  />
                  <h3>
                    <strong>Your Cart is Empty</strong>
                  </h3>

                  <Link
                    to="/products"
                    class="btn btn-primary cart-btn-transform m-3"
                    data-abc="true"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default EmptyCart;
