import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "./singleProductSlice";

const SingleProduct = () => {
  const dispatch = useDispatch();

  const { productId } = useParams();

  useEffect(() => {
    dispatch(fetchSingleProduct(productId));
  }, [dispatch]);

  const product = useSelector((state) => state.singleProduct.singleProduct);

  return (
    <div>
      <div>
        {!product.imageUrl ? (
          <h4> Loading... </h4>
        ) : (
          <div>
            <h3> {product.name} </h3>
            <div>Category: {product.category}</div>
            <img src={product.imageUrl} />
            <div>$ {product.price}</div>
            <div>Description: {product.description}</div>
            <a href="#" className="btn btn-primary">
              ADD TO CART
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
