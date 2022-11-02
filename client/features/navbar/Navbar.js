import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCart } from "../cart/cartSlice";
import LoggedInNavbar from "./LoggedInNavbar";
import NotLoggedInNavbar from "./NotLoggedInNavbar";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);

  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/">
          <img
            style={{ width: 80, height: 40 }}
            src="https://i.imgur.com/eotngFm.png"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/products"
              >
                Products
              </Link>
            </li>
            {isLoggedIn ? <LoggedInNavbar /> : <NotLoggedInNavbar />}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
