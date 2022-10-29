import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "./allProductsSlice";
import { Link } from "react-router-dom";

const AllProducts = (props) => {
  const { shoppingCart, setShoppingCart, addItemToCart } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  // const [shoppingCart, setShoppingCart] = useState([]);

  console.log("shopping cart", shoppingCart);
  const allproducts = useSelector((state) => state.allProducts.products);

  return (
    <div>
      <div id="AllProducts">
        <section>
          <h1
            style={{
              textAlign: `center`,
              backgroundColor: `#F6BD60`,
            }}
          >
            All PunkoFops
          </h1>
        </section>
        <section>
          <div className="container">
            <div className={"row"}>
              {allproducts.map((product) => (
                <div
                  key={product.id}
                  className="col-sm-4"
                  style={{
                    marginTop: `30px`,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    className="card border-secondary"
                    style={{
                      width: `18rem`,
                      height: `25rem`,
                      display: `flex`,
                      justifyContent: `center`,
                      alignItems: `center`,
                    }}
                  >
                    <Link to={`/products/${product.id}`}>
                      <div
                        style={{
                          width: `14rem`,
                          height: `16rem`,
                          backgroundImage: `url(${product.imageUrl})`,
                          backgroundSize: `cover`,
                        }}
                        className="card-img-top"
                      ></div>
                      <h5
                        className="card-title text-center"
                        style={{ color: `black` }}
                      >
                        {product.name}
                      </h5>
                    </Link>
                    <div className="card-body text-center">
                      <p>${product.price}</p>
                      <button
                        href="#"
                        value={product.name}
                        className="btn btn-primary"
                        onClick={addItemToCart}
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AllProducts;
