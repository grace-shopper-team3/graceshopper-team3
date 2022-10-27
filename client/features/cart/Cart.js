import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Cart = (props) => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row g-1" style={{ padding: "20px" }}>
        <div className="row">
          <div className="col-md-6">
            <h2>Cart</h2>
            <div className="card" style={{ width: "30rem" }}>
              <table className="table align-middle mb-0">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th></th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link to="/products/1">
                          <img
                            src="https://www.tradeinn.com/f/13820/138203491/funko-pop-marvel-avengers-endgame-iron-man-exclusive.jpg"
                            alt=""
                            style={{ width: "60px", height: "70px" }}
                          />
                        </Link>
                        <div className="ms-3">
                          <Link to="/products/1">
                            <p
                              className="fw-bold mb-1"
                              style={{
                                color: "black",
                                textDecoration: "underline",
                              }}
                            >
                              Iron Man
                            </p>
                          </Link>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="fw-normal mb-1">
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                        >
                          -
                        </button>{" "}
                        {""}1 {""}{" "}
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                        >
                          +
                        </button>
                      </p>
                      <p className="text-muted mb-0">
                        <button
                          type="button"
                          className="btn btn-link btn-sm btn-rounded"
                        >
                          Remove
                        </button>
                      </p>
                    </td>
                    <td>
                      <span className="badge badge-success rounded-pill d-inline">
                        Active
                      </span>
                    </td>
                    <td>$3000.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link to="/products/2">
                          <img
                            src="https://m.media-amazon.com/images/I/41i86B2N36L.jpg"
                            alt=""
                            style={{ width: "60px", height: "70px" }}
                          />
                        </Link>
                        <div className="ms-3">
                          <Link to="/products/2">
                            <p
                              className="fw-bold mb-1"
                              style={{
                                color: "black",
                                textDecoration: "underline",
                              }}
                            >
                              Spiderman
                            </p>
                          </Link>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="fw-normal mb-1">
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                        >
                          -
                        </button>{" "}
                        {""}2 {""}{" "}
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                        >
                          +
                        </button>
                      </p>
                      <p className="text-muted mb-0">
                        <button
                          type="button"
                          className="btn btn-link btn-sm btn-rounded"
                        >
                          Remove
                        </button>
                      </p>
                    </td>
                    <td>
                      <span className="badge badge-success rounded-pill d-inline">
                        Active
                      </span>
                    </td>
                    <td>$12.00</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-4">
            <h2>Order Summary</h2>
            <div className="card" style={{ width: "30rem" }}></div>
            <div className="row">
              <div className="col-8">
                <p> Subtotal(3 items):</p>
              </div>
              <div className="col-4">
                <p> $3024.00</p>
              </div>
            </div>
            <div className="row">
              <div className="col-8">
                <p> Delivery:</p>
              </div>
              <div className="col-4">
                <p> $5.99</p>
              </div>
            </div>
            <div className="card" style={{ width: "30rem" }}></div>
            <div className="row">
              <div className="col-8">
                <h3>Total: </h3>
              </div>
              <div className="col-4">
                <h3>{3024.0 + 5.99}</h3>
              </div>
            </div>

            <button
              className="btn btn-primary"
              onClick={() => {
                navigate("/checkout");
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
    // is cart empty ?
    // your cart is empty :
    // cart items

    // display subtotal
    // checkout button
    // clicking:
    // renders checkout component
  );
};

export default Cart;
