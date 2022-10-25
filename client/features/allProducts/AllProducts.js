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
  console.log("allproducts", allproducts);

  return (
    <div id="AllProducts">
      <div>
        <h1>All Products</h1>
      </div>
      <div>
        {allproducts.map((product) => (
          <div key={product.id}>
            <div className="card" style={{ width: `18rem` }}>
              <img
                className="card-img-top"
                src={product.imageUrl}
                alt="Card image cap"
              ></img>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p>$ {product.price}</p>
                <a href="#" className="btn btn-primary">
                  ADD TO CART
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
