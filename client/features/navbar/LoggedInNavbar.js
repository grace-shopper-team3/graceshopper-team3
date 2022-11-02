import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../app/store";
import { fetchCart } from "../cart/cartSlice";

const LoggedInNavbar = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const cart = useSelector((state) => state.cart.cart);

  const cartCheck = (cart) => {
    let ids = [];
    let qty = 0;

    for (let i = 0; i < cart.length; i++) {
      if (!ids.includes(cart[i].productId)) {
        qty += cart[i].quantityInCart;
        ids.push(cart[i].productId);
      }
    }
    return qty;
  };
  // const cartCheck = (cart) => {
  //   let ids = [];
  //   let qty = 0;

  //   for (let i = 0; i < cart.length; i++) {
  //     if (!ids.includes(cart[i].productId)) {
  //       qty += cart[i].quantityInCart;
  //       ids.push(cart[i].productId);
  //     } else {
  //       qty++;
  //     }
  //   }
  //   return qty;
  // };

  const logoutAndRedirectHome = () => {
    dispatch(logout());
  };

  return (
    <>
      <li className="nav-item dropdown" style={{ color: "white" }}>
        <a
          className="nav-link dropdown-toggle"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          My Account
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <a className="dropdown-item" href="/profile">
              User Profile
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
        </ul>
      </li>

      <li className="nav-item">
        <Link
          className="nav-link active"
          onClick={logoutAndRedirectHome}
          aria-current="page"
          to="/home"
        >
          Logout
        </Link>
      </li>

      <li className="nav-item justify-content-end">
        <Link className="nav-link active" aria-current="page" to="/cart">
          <span className="position-relative top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cart && cart.length ? cartCheck(cart) + 1 : 0}
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-cart"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
        </Link>
      </li>
    </>
  );
};

export default LoggedInNavbar;
