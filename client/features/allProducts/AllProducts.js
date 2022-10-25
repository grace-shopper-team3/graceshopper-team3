import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import allProductsSlice from "./allProductsSlice";
import { fetchAllProducts } from "./allProductsSlice";

const AllProducts = () => {
  //depending on what's in the store, something like,
  //const allproducts = useSelector(selectAllProducts)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const allproducts = useSelector((state) => state.allProducts.allProducts);

  return (
    <div id="AllProducts">
      <div>
        <h1>All Products</h1>
      </div>
      <div>
        {allproducts.map((product) => (
          <div key={product.id}>
            {product.name} {product.price}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
