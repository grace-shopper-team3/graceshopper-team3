import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchAllProducts } from "../allProducts/allProductsSlice";
import { fetchCart } from "../cart/CartSlice";

/**
 * COMPONENT
 */
const Home = (props) => {
  const userInfo = useSelector((state) => state.auth.me);
  const userId = userInfo.id;
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchCart(userId));
  // }, [dispatch, userId]);

  // const cart = useSelector((state) => state.cart.cart);
  // const quantity = (arr) => {
  //   let accum = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     let curr = arr[i];
  //     accum += curr.quantityInCart;
  //   }
  //   return accum;
  // };
  // console.log(quantity(cart));
  return (
    <div className="container-fluid">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://assets-prd.ignimgs.com/2022/08/16/funko-advent-calendars-2022-1660661618907.png"
              className="d-block w-100"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://assets-prd.ignimgs.com/2022/07/25/black-panther-funko-pops-1658775848280.png?width=1280"
              className="d-block w-100"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://assets-prd.ignimgs.com/2022/04/18/thor-love-thunder-funko-pops-1650298520364.png?width=1280"
              className="d-block w-100"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container text-center" style={{ paddingBottom: "10px" }}>
        <div className="row g-3">
          <div className="col-6">
            <div className="bundle">DC Universe</div>
          </div>
          <div className="col-6">
            <div className="bundle">Marvel</div>
          </div>
          <div className="col-6">
            <div className="bundle">Disney</div>
          </div>
          <div className="col-6">
            <div className="bundle">Pokemon</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
