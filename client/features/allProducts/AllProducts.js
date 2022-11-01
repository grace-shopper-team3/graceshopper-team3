import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllProducts,
  fetchCategoryProducts,
  fetchPriceProducts,
} from "./allProductsSlice";
import { Link } from "react-router-dom";
import { addItemToCart, fetchCart } from "../cart/CartSlice";

const AllProducts = () => {
  const userInfo = useSelector((state) => state.auth.me);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
    setProductList(allProducts);
  }, [dispatch]);

  const styles = {
    disabled: {
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

  const filterCategory = (ev) => {
    ev.preventDefault();
    if (ev.target.text === "All") {
      setProductList(allProducts);
      return;
    }
    const category = ev.target.text;
    const filteredArray = allProducts.filter(
      (product) => product.category === category
    );
    setProductList(filteredArray);
    console.log(productList);
  };

  const filterPrice = (ev) => {
    ev.preventDefault();
    const price = ev.target.text;
    if (price === "All") {
      setProductList(allProducts);
    } else if (price === "Over $25") {
      const filteredArray = allProducts.filter(
        (product) => product.price >= 25
      );
      setProductList(filteredArray);
    } else {
      const filteredArray = allProducts.filter((product) => product.price < 25);
      setProductList(filteredArray);
    }
    console.log(productList);
  };

  const addToCart = (ev, productId) => {
    ev.preventDefault();
    dispatch(addItemToCart({ productId }));
  };

  const allProducts = useSelector((state) => state.allProducts.products);
  let [productList, setProductList] = useState([]);

  productList.length === 0 && allProducts.length > 0
    ? setProductList(allProducts)
    : null;

  return (
    <div>
      <section className="vh-100">
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
            <div className="container py-5 h-100">
              <div className="row ">
                <div className="d-flex  align-items-center  justify-content-around">
                  <div className="col-3 dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Search by Category
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={(ev) => filterCategory(ev)}
                      >
                        All
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={(ev) => filterCategory(ev)}
                      >
                        Marvel
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={(ev) => filterCategory(ev)}
                      >
                        DC
                      </a>
                    </div>
                    {/* </div> */}
                  </div>
                  {/* <div className="btn-group col-sm"> */}
                  <div className="col-3 dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Search by Price
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={(ev) => filterPrice(ev)}
                      >
                        All
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={(ev) => filterPrice(ev)}
                      >
                        Under $25
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={(ev) => filterPrice(ev)}
                      >
                        Over $25
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                {productList.map((product) => (
                  <div className="col-sm">
                    <div key={product.id} style={styles.row}>
                      <div
                        className="card border-secondary"
                        style={styles.card}
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
                            className="btn btn-primary"
                            onClick={(ev) => addToCart(ev, product.id)}
                          >
                            ADD TO CART
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default AllProducts;
