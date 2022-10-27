import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="sticky-top">
      <nav className="navbar sticky-top navbar-light bg-light">
        <div className="container-fluid">
          <div className="navbar-header ">
            <Link to="/">
              <img
                style={{ width: 70, height: 40 }}
                src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Funko.svg/1200px-Funko.svg.png"
              />
            </Link>

            <Link to="/">Home</Link>
            <Link to="/products">All Products</Link>
          </div>
          <form className="navbar-form navbar-left">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
            </div>
            <button type="submit" className="btn btn-default">
              Submit
            </button>
            {isLoggedIn ? (
              <button type="button" onClick={logoutAndRedirectHome}>
                Logout
              </button>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
              </>
            )}
            <Link to="/cart"> Cart</Link>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
