import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoggedInNavbar from "./LoggedInNavbar";
import NotLoggedInNavbar from "./NotLoggedInNavbar";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);

  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="sticky-top">
      <nav className="navbar sticky-top navbar-light bg-light">
        <div className="container-fluid">
          <div className="navbar-header ">
            <Link to="/">
              <img
                style={{ width: 70, height: 40 }}
                src="https://i.imgur.com/gxa6IWX.png"
              />
            </Link>
            <Link to="/">Home</Link>
            <Link to="/products">All Products</Link>
          </div>
          {isLoggedIn ? <LoggedInNavbar /> : <NotLoggedInNavbar />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
