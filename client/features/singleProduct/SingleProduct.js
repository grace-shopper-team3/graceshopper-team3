import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {
  addItemToCart,
  incrementItemInCart,
  fetchCart,
} from "../cart/cartSlice";
import { fetchSingleProduct } from "./singleProductSlice";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const cart = useSelector((state) => state.cart.cart);

  const capitalizeAll = (str) => {
    return str?.toUpperCase();
  };

  const addToCart = (ev, productId) => {
    let init = false;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].productId == productId) {
        console.log("product IDs", cart[i].productId, productId);
        const quantityInCart = cart[i].quantityInCart;
        dispatch(incrementItemInCart({ productId, quantityInCart }));
        init = true;
      }
    }
    !init ? dispatch(addItemToCart({ productId })) : null;
    dispatch(fetchCart());
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(fetchSingleProduct(productId));
  }, [dispatch, quantityInCart]);

  const product = useSelector((state) => state.singleProduct.aProduct);
  const { name, category, imageUrl, price, description, quantityInCart } =
    product;

  return (
    <div>
      <div>
        <div>
          <section>
            <h1
              style={{
                textAlign: `center`,
                backgroundColor: `#F6BD60`,
              }}
            >
              {capitalizeAll(name)}
            </h1>
          </section>
          <div className="container">
            <div className="row">
              <div className="col-md">
                <img
                  className="singleProds"
                  src={imageUrl}
                  style={{
                    height: `32rem`,
                  }}
                />
              </div>
              <div className="col-md">
                <div className="singleDesc">
                  <h4 style={{ marginTop: `10%` }}>{description}</h4>
                  <h3
                    style={{
                      marginTop: `3%`,
                      fontWeight: "bolder",
                      alignItems: "center",
                      fontFamily: "TT-Norms-Black",
                    }}
                  >
                    Category: {category}
                  </h3>
                  <h4
                    style={{
                      marginTop: `2%`,
                      fontWeight: "bolder",
                    }}
                  >
                    ${price}
                  </h4>

                  <section>
                    <button
                      className="btn btn-dark"
                      style={{
                        fontFamily: "merel-black",
                        color: "black",
                        backgroundColor: "#F6BD60",
                      }}
                      onClick={(ev) => addToCart(ev, productId)}
                    >
                      ADD TO CART
                    </button>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
