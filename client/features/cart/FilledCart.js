import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import {
  fetchCart,
  incrementItemInCart,
  decrementItemInCart,
  removeFromCart,
} from "./CartSlice";
import { fulfillOrder } from "../checkout/checkoutSlice";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const FilledCart = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const TOKEN = 'token'
  const token = window.localStorage.getItem(TOKEN)

 
  let { cart } = props;  

  const incrementItem = (productId, quantityInCart) => {
    dispatch(incrementItemInCart({ productId, quantityInCart })).then(()=>{
      dispatch(fetchCart())
    })
    };

  const decrementItem = (productId, quantityInCart) => {
    dispatch(decrementItemInCart({ productId, quantityInCart })).then(()=>{
      dispatch(fetchCart())
  })
}

  const removeItem = (productId) => {
    dispatch(removeFromCart({ productId })).then(()=>{
      dispatch(fetchCart())
    })
    };
  

  const handleCheckout = () => {
    dispatch(fulfillOrder());
    navigate("/checkout");
  };

  
  console.log(cart)

  if (token){
      return (
    <section className="vh-100">
      <div className="container py-5 h-100">
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
                  <tbody key={uuidv4()}>
                    <tr>
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
                handleCheckout();
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
  }else{
    return (
      <section className="vh-100">
        <div className="container py-5 h-100">
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
                    <tbody key={uuidv4()}>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link to={`/products/${item.id}`}>
                              <img
                                src={`${item.imageUrl}`}
                                alt=""
                                style={{ width: "60px", height: "70px" }}
                              />
                            </Link>
                            <div className="ms-3">
                              <Link to={`/products/${item.id}`}>
                                <p
                                  className="fw-bold mb-1"
                                  style={{
                                    color: "black",
                                    textDecoration: "underline",
                                  }}
                                >
                                  {`${item.name}`}
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
                                  item.id,
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
                                  item.id,
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
                                removeItem(item.id);
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
                        <td>{`$${item.price * item.quantityInCart}`}</td>
                        <td></td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
  
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
                        accum + element.quantityInCart * element.price,
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
                        accum + element.quantityInCart * element.price,
                      0
                    ) + 5.99}
                  </h3>
                </div>
              </div>
  
              <button
                className="btn btn-primary"
                onClick={() => {
                  handleCheckout();
                }}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default FilledCart;
