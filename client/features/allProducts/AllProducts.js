import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "./allProductsSlice";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  // o: you are nesting allProducts within allProducts 🤔 ... there's probably
  //  a better structure for this so its more clear
  const allproducts = useSelector((state) => state.allProducts.allProducts);

  return (
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
            {/* o: destructuring is your friend */}
            {allproducts.map((product) => (
              // o: instead of hardcoding the styles like, try setting up a styles
              //  object as described here 👉 https://css-tricks.com/different-ways-to-write-css-in-react/#aa-write-inline-styles
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
                    <Link href="#" className="btn btn-primary">
                      ADD TO CART
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllProducts;
