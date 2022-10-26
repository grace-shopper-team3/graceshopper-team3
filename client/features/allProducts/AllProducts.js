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
      <section>
        <h1
          style={{
            textAlign: `center`,
            backgroundColor: `#F6BD60`,
          }}
        >
          All FunkoPops
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
                    {/* <img
                      style={{ height: `15rem` }}
                      className="card-img-top"
                      src={product.imageUrl}
                      alt="Card image cap"
                    ></img> */}
                    <div
                      style={{
                        width: `14rem`,
                        height: `16rem`,
                        backgroundImage: `url(${product.imageUrl})`,
                        backgroundSize: `cover`,
                      }}
                      className="card-img-top"
                    ></div>
                  </Link>
                  <div className="card-body text-center">
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
      </section>
    </div>
  );
};

export default AllProducts;
