import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { addItemToCart, fetchCart, selectCart } from "../cart/cartSlice";
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
    dispatch(addItemToCart({ productId }));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(fetchSingleProduct(productId));
    dispatch(fetchCart());
  }, [dispatch]);

  const product = useSelector((state) => state.singleProduct.aProduct);
  const { name, category, imageUrl, price, description } = product;
  const userInfo = useSelector((state) => state.auth.me);

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
              {name}
            </h1>
          </section>

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
              <div>
                <h4 style={{ marginTop: `5%` }}>{description}</h4>
                <h3
                  style={{
                    marginTop: `3%`,
                    fontWeight: "bolder",
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
              </div>

              <section>
                <button
                  className="btn btn-dark"
                  style={{
                    fontFamily: "merel-black",
                    color: "black",
                    backgroundColor: "#F6BD60",
                  }}
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
