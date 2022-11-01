import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  incrementItemInCart,
  decrementItemInCart,
  removeFromCart,
} from "./CartSlice";
import { fulfillOrder } from "../checkout/checkoutSlice";
import { useDispatch } from "react-redux";

const FilledCart = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart, userId, userInfo } = props;

  const incrementItem = (productId, quantityInCart) => {
    dispatch(incrementItemInCart({ userId, productId, quantityInCart }));
  };

  const decrementItem = (productId, quantityInCart) => {
    dispatch(decrementItemInCart({ userId, productId, quantityInCart }));
  };

  const removeItem = (productId) => {
    dispatch(removeFromCart({ userId, productId }));
  };

  const handleCheckout = (userId) => {
    dispatch(fulfillOrder(userId));
    navigate("/checkout");
  };

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        {/* <div className="row g-1" style={{ padding: "20px" }}> */}
        <div className="row d-flex justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
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

                {cart.map((item) => (
                  <tbody>
                    <tr key={item.productId}>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link to={`/products/${item.productId}`}>
                            <img
                              src={`${item.product.imageUrl}`}
                              alt=""
                              style={{ width: "60px", height: "70px" }}
                            />
                          </Link>
                          <div className="ms-3">
                            <Link to={`/products/${item.productId}`}>
                              <p
                                className="fw-bold mb-1"
                                style={{
                                  color: "black",
                                  textDecoration: "underline",
                                }}
                              >
                                {`${item.product.name}`}
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
                            onClick={() => {
                              decrementItem(
                                item.productId,
                                item.quantityInCart
                              );
                            }}
                          >
                            -
                          </button>{" "}
                          {""} {`${item.quantityInCart}`} {""}{" "}
                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                            onClick={() => {
                              incrementItem(
                                item.productId,
                                item.quantityInCart
                              );
                            }}
                          >
                            +
                          </button>
                        </p>
                        <p className="text-muted mb-0">
                          <button
                            type="button"
                            className="btn btn-link btn-sm btn-rounded"
                            onClick={() => {
                              removeItem(item.productId);
                            }}
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
                      <td>{`$${item.product.price * item.quantityInCart}`}</td>
                      <td></td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
          {/* SECOND COMPONENT */}
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <h2>Order Summary</h2>
            <div className="card" style={{ width: "30rem" }}></div>
            <div className="row">
              <div className="col-8">
                <p>
                  {" "}
                  Subtotal (
                  {cart.reduce(
                    (accum, element) => accum + element.quantityInCart,
                    0
                  )}{" "}
                  items):
                </p>
              </div>
              <div className="col-4">
                <p>
                  $
                  {cart.reduce(
                    (accum, element) =>
                      accum + element.quantityInCart * element.product.price,
                    0
                  )}
                </p>
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
                <h3>
                  $
                  {cart.reduce(
                    (accum, element) =>
                      accum + element.quantityInCart * element.product.price,
                    0
                  ) + 5.99}
                </h3>
              </div>
            </div>

            <button
              className="btn btn-primary"
              onClick={() => {
                handleCheckout(userInfo.id);
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilledCart;
