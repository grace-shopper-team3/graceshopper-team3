import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchSingleProduct } from "./singleProductSlice";

const SingleProduct = () => {
  const dispatch = useDispatch();

  const { productId } = useParams();

  useEffect(() => {
    dispatch(fetchSingleProduct(productId));
  }, [dispatch]);

  // o: you are nesting singleProduct within singleProduct 🤔 ... there's probably
  //  a better structure for this so its more clear
  const product = useSelector((state) => state.singleProduct.singleProduct);

  return (
    <div>
      <div>
        {/* 
          o: why are you doing this exactly? this logic seems strange to me...
            also, destructuring is your friend
        */}
        {!product.imageUrl ? (
          <h4> Loading... </h4>
        ) : (
          <div>
            <h3> {product.name} </h3>
            <div>Category: {product.category}</div>
            <div
              style={{
                display: `flex`,
                justifyContent: `center`,
              }}
            >
              <img
                src={product.imageUrl}
                style={{
                  height: `36rem`,
                  marginRight: `36rem`,
                }}
              />
            </div>
            <div>$ {product.price}</div>
            <div>Description: {product.description}</div>
            <Link className="btn btn-primary">ADD TO CART</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
