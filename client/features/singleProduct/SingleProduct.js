import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchSingleProduct } from "./singleProductSlice";

const SingleProduct = () => {
  const dispatch = useDispatch();

  const { productId } = useParams();

  const addToCart = (ev) => {
    ev.preventDefault();
    //placeholder for redux slice thunk
  };

  useEffect(() => {
    dispatch(fetchSingleProduct(productId));
  }, [dispatch]);

  const product = useSelector((state) => state.singleProduct.aProduct);
  const { name, category, imageUrl, price, description } = product;

  return (
    <div>
      <div>
        <div>
          <h3> {name} </h3>
          <div>Category: {category}</div>
          <div
            style={{
              display: `flex`,
              justifyContent: `center`,
            }}
          >
            <img
              src={imageUrl}
              style={{
                height: `36rem`,
                marginRight: `36rem`,
              }}
            />

            <div>$ {price}</div>
            <div>Description: {description}</div>
          </div>
          <button className="btn btn-primary" onClick={() => addToCart()}>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
