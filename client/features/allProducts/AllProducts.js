import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "./allProductsSlice";
import { Link } from "react-router-dom";
import { addItemToCart } from "../cart/CartSlice";
import { fetchCart } from "../cart/CartSlice";

const AllProducts = (props) => {
  const { cart } = props;
  const userInfo = useSelector((state) => state.auth.me);
  const userId = userInfo.id;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const styles = {
    addedToCart: {
      background: `#999`,
      color: `#555`,
      cursor: `not-allowed`,
    },
    row: {
      marginTop: `30px`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    card: {
      width: `18rem`,
      height: `25rem`,
      display: `flex`,
      justifyContent: `center`,
      alignItems: `center`,
    },
  };

  const addToCart = (ev, productId) => {
    ev.preventDefault();
    dispatch(addItemToCart({ userId, productId }));
  };

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
                <div key={product.id} className="col-sm-4" style={styles.row}>
                  <div className="card border-secondary" style={styles.card}>
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
                        className="btn btn-primary"
                        onClick={(ev) => addToCart(ev, product.id)}
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
