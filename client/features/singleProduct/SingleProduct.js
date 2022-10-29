import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchCart } from "../cart/CartSlice";
import { fetchSingleProduct } from "./singleProductSlice";

const SingleProduct = (props) => {
  const dispatch = useDispatch();
  const { shoppingCart, setShoppingCart, addItemToCart } = props;
  const { productId } = useParams();

  // const addToCart = (ev) => {
  //   ev.preventDefault();
  //   //placeholder for redux slice thunk
  //   dispatch(fetchCart());
  // };

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchSingleProduct(productId));
  }, [dispatch]);

  const product = useSelector((state) => state.singleProduct.aProduct);
  const { name, category, imageUrl, price, description } = product;

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
                //marginRight: `36rem`,
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
                  //fontFamily: `TT-Norms-Black`,
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
                  href="#"
                  value={name}
                  className="btn btn-primary"
                  onClick={addItemToCart}
                >
                  ADD TO CART
                </button>
                {/* <button
                  className="btn btn-primary"
                  onClick={(ev) => addToCart(ev)}
                >
                  ADD TO CART
                </button> */}
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
