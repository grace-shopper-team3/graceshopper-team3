import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "./allProductsSlice";
import { Link } from "react-router-dom";
import { addItemToCart, fetchCart } from "../cart/CartSlice";
import { useLocation } from "react-router-dom";
import ReactPaginate from "react-paginate";

const AllProducts = () => {
  const itemsPerPage = 12;
  const [itemOffset, setItemOffset] = useState(0);

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(3);

  const location = useLocation();
  let homeCategory = null;
  let homePrice = null;
  location.state ? ({ homeCategory } = location.state) : null;
  location.state ? ({ homePrice } = location.state) : null;

  const userInfo = useSelector((state) => state.auth.me);

  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);

    productList.length > 0
      ? setPageCount(Math.ceil(productList.length / itemsPerPage))
      : null;
    productList
      ? setCurrentItems(productList.slice(itemOffset, endOffset))
      : null;
    dispatch(fetchAllProducts());
  }, [itemOffset, itemsPerPage, productList]);

  const styles = {
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

  const handlePageClick = (ev) => {
    const newOffset = (ev.selected * itemsPerPage) % productList.length;
    console.log(
      `User requested page number ${ev.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
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
  productList &&
  productList.length === 0 &&
  allProducts.length > 0 &&
  homeCategory
    ? setProductList(
        allProducts.filter((item) => item.category === homeCategory)
      )
    : null;

  productList && productList.length === 0 && allProducts.length > 0 && homePrice
    ? setProductList(allProducts.filter((item) => item.price <= homePrice))
    : null;

  productList &&
  productList.length > 0 &&
  currentItems &&
  currentItems.length === 0
    ? setCurrentItems(productList.slice(0, 12))
    : null;

  console.log("currentItems", currentItems);

  return (
    <div>
      <section className="">
        <div id="AllProducts">
          <section>
            <h1
              style={{
                textAlign: `center`,
                backgroundColor: `#F6BD60`,
              }}
            >
              ALL PRODUCTS
            </h1>
          </section>

          <section>
            <div className="container py-3 h-100">
              <div className="row p-2">
                <div className="d-flex">
                  <div className="col-lg-2 dropdown">
                    <button
                      className="btn  dropdown-toggle"
                      type="button"
                      z
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      style={{
                        fontFamily: "merel-black",
                        color: "white",
                        backgroundColor: "black",
                      }}
                      aria-expanded="false"
                    >
                      Search by: Category
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={(ev) => filterCategoryButton(ev)}
                      >
                        All
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={(ev) => filterCategoryButton(ev)}
                      >
                        Marvel
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={(ev) => filterCategoryButton(ev)}
                      >
                        DC
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-2  dropdown">
                    <button
                      className="btn dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style={{
                        fontFamily: "merel-black",
                        color: "white",
                        backgroundColor: "black",
                      }}
                    >
                      Search by: Price
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={(ev) => filterPriceButton(ev)}
                      >
                        All
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={(ev) => filterPriceButton(ev)}
                      >
                        Under $25
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={(ev) => filterPriceButton(ev)}
                      >
                        Over $25
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                {currentItems
                  ? currentItems.map((product) => (
                      <div className="col-sm">
                        <div key={product.id} style={styles.row}>
                          <div
                            className="card border-secondary"
                            style={styles.card}
                          >
                            <Link
                              to={`/products/${product.id}`}
                              style={{ textDecoration: `none` }}
                            >
                              <div
                                style={{
                                  width: `14rem`,
                                  height: `16rem`,
                                  backgroundImage: `url(${product.imageUrl})`,
                                  backgroundSize: "cover",
                                }}
                                className="card-img-top"
                              ></div>
                              <h5
                                className="card-title text-center"
                                style={{
                                  color: `black`,
                                  marginTop: `20px`,
                                  fontSize: `135%`,
                                }}
                              >
                                {product.name}
                              </h5>
                            </Link>
                            <div
                              className="card-body text-center"
                              style={{ fontSize: `100%`, marginTop: `-15px` }}
                            >
                              <p>${product.price}</p>
                              <button
                                className="btn btn-dark"
                                onClick={(ev) => addToCart(ev, product.id)}
                                style={{
                                  marginTop: `-10px`,
                                  fontFamily: "merel-black",
                                  color: "black",
                                  backgroundColor: "#F6BD60",
                                }}
                              >
                                ADD TO CART
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  : null}
              </div>
            </div>
          </section>
          <ReactPaginate
            className="pagination"
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
          />
        </div>
      </section>
    </div>
  );
};

export default AllProducts;
