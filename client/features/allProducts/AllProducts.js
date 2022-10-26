import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "./allProductsSlice";
import { Link } from "react-router-dom";

const AllProducts = () => {
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
            <div className="card" style={{ width: `18rem` }}>
              <Link to={`/products/${product.id}`}>
                <img
                  className="card-img-top"
                  src={product.imageUrl}
                  alt="Card image cap"
                ></img>
              </Link>
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
