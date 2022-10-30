import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  fetchCart,
  incrementItemInCart,
  decrementItemInCart,
  removeFromCart,
} from "./CartSlice";
import { fulfillOrder } from "../checkout/checkoutSlice";

const Cart = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userInfo = useSelector((state) => state.auth.me);
  const userId = userInfo.id;
  const cart = useSelector((state) => state.cart.cart);

  const incrementItem = (productId, quantityInCart) => {
    dispatch(incrementItemInCart({ userId, productId, quantityInCart }));
  };

  const decrementItem = (productId, quantityInCart) => {
    dispatch(decrementItemInCart({ userId, productId, quantityInCart }));
  };

  const removeItem = (productId) => {
    dispatch(removeFromCart({ userId, productId }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchCart(userId));
  }, [dispatch, userId]);

  const handleCheckout = (userId) => {
    dispatch(fulfillOrder(userId));
    navigate("/checkout");
  };

  console.log(cart);
  // const total = cart.reduce(
  //   (accum, elem) => accum + elem.quantityInCart * elem.product.price,
  //   0
  // );

  return (
    <div className="container-fluid">
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
                  {cart
                    ? cart.map((item) => (
                        <tr key={item.productId}>
                          <td>
                            <div className="d-flex align-items-center">
                              <Link to={`/products/${item.productId}`}>
                                <img
                                  src={item ? `${item.product.imageUrl}` : null}
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
                                    {item ? `${item.product.name}` : null}
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
                          <td> {`${item.product.price}`} </td>
                          <td></td>
                        </tr>
                      ))
                    : null}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-4">
            <h2>Order Summary</h2>
            <div className="card" style={{ width: "30rem" }}></div>
            <div className="row">
              <div className="col-8">
                <p> Subtotal (3 items):</p>
              </div>
              <div className="col-4">
                <p> $5675.70</p>
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
                <h3>$30000000</h3>
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
