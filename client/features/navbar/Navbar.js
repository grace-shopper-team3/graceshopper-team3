import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";
import Cart from "../cart/Cart";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate("/home");
  };
  const { name } = useSelector((state) => state.auth.me);
  const capitalizeFirst = (str) => {
    return str?.charAt(0).toUpperCase() + str?.slice(1);
  };
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
          {isLoggedIn ? (
            <>
              <form className="navbar-form navbar-left">
                <small>Welcome back, {capitalizeFirst(name)}! </small>
                <button
                  className="btn btn-link"
                  onClick={logoutAndRedirectHome}
                >
                  Logout
                </button>
                <Link to="/cart">
                  <i class="fa badge">&#xf07a </i>
                  <span class="badge badge-warning" id="lblCartCount">
                    {cart.length}
                  </span>
                </Link>
                {/* <Link to="/cart">
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
                </Link> */}
              </form>
            </>
          ) : (
            <>
              <form className="navbar-form navbar-left">
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                <Link to="/cart">Cart({cart.length})</Link>
                {/* <Link to="/cart"> */}
                {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-cart"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg> */}
                {/* </Link> */}
              </form>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
