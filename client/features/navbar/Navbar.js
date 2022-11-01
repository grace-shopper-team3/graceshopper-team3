import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoggedInNavbar from "./LoggedInNavbar";
import NotLoggedInNavbar from "./NotLoggedInNavbar";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);

  const cart = useSelector((state) => state.cart.cart);

  return (
    <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light">
      <div class="container-fluid">
        <Link to="/">
          <img
            style={{ width: 70, height: 40 }}
            src="https://i.imgur.com/gxa6IWX.png"
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/products">
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
