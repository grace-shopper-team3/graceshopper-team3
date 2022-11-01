import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "./allProductsSlice";
import { Link } from "react-router-dom";
import { addItemToCart, fetchCart } from "../cart/CartSlice";
import { useLocation } from "react-router-dom";

const AllProducts = () => {
  const location = useLocation();
  let homeCategory = null;
  location.state ? ({ homeCategory } = location.state) : null;

  const userInfo = useSelector((state) => state.auth.me);

  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(fetchAllProducts());
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

  const filterCategoryButton = (ev) => {
    const category = ev.target.text;
    if (category === "All") {
      setProductList(allProducts);
    } else {
      setProductList(
        allProducts.filter((product) => product.category === category)
      );
    }
  };

  const filterPriceButton = (ev) => {
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
  };

  const addToCart = (ev, productId) => {
    ev.preventDefault();
    dispatch(addItemToCart({ productId }));
  };

  const allProducts = useSelector((state) => state.allProducts.products);
  let [productList, setProductList] = useState([]);

  //Checks that allProducts and productList are avilable. Then sets productList
  productList.length === 0 && allProducts.length > 0
    ? setProductList(allProducts)
    : null;

  //Checks if we came from a home page category link, and filters if we did.
  productList.length === 0 && allProducts.length > 0 && homeCategory
    ? setProductList(
        allProducts.filter((item) => item.category === homeCategory)
      )
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

          <section className="row">
            <div className="col-2 dropdown">
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
            </div>

            <div className="col-2 dropdown">
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
          </section>
          <section>
            <div className="container py-5 h-100">
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
