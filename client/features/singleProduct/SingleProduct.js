import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { addItemToCart, fetchCart, selectCart } from "../cart/CartSlice";
import { fetchSingleProduct } from "./singleProductSlice";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const cart = useSelector((state) => state.cart.cart);

  const addToCart = (ev) => {
    ev.preventDefault();
    cart.map((item) => {
      if (item.productId === productId) {
        document.getElementById("addToCart").disabled = true;
      }
    });
    dispatch(addItemToCart({ userId, productId }));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(fetchSingleProduct(productId));
    dispatch(fetchCart(userId));
  }, [dispatch]);

  const product = useSelector((state) => state.singleProduct.aProduct);
  const { name, category, imageUrl, price, description } = product;
  const userInfo = useSelector((state) => state.auth.me);
  const userId = userInfo.id;

  return (
    <div>
      <div>
        <div>
          <div
            style={{
              display: `flex`,
              justifyContent: `center`,
              alignItems: `center`,
            }}
          >
            <img
              src={imageUrl}
              style={{
                height: `36rem`,
              }}
            />
            <div
              style={{
                flex: `0 0 50%`,
                padding: `10px`,
              }}
            >
              <h1
                style={{
                  fontSize: `600%`,
                }}
              >
                {" "}
                {name}{" "}
              </h1>
              <div>
                <h4 style={{ marginTop: `3%` }}>Category: {category}</h4>
                <h1 style={{ marginTop: `5%` }}>${price}</h1>
                <h4 style={{ marginTop: `5%` }}>{description}</h4>
              </div>
              <section>
                <button
                  className="btn btn-primary"
                  onClick={(ev) => addToCart(ev)}
                >
                  ADD TO CART
                </button>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
