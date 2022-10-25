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
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          {isLoggedIn ? (
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                <Link to="/">
                  <img
                    style={{ width: 60, height: 30 }}
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Funko.svg/1200px-Funko.svg.png"
                  />
                </Link>
              </a>
              <Link to="/">Home</Link>
              <Link to="/products">All Products</Link>
              <button type="button" onClick={logoutAndRedirectHome}>
                Logout
              </button>
            </div>
          ) : (
            <div class="navbar-header">
              {/* The navbar will show these links before you log in */}
              <a className="navar-brand" href="#">
                <Link to="/">
                  <img
                    style={{ width: 60, height: 30 }}
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Funko.svg/1200px-Funko.svg.png"
                  />
                </Link>
              </a>

              <Link to="/">Home</Link>
              <Link to="/products">All Products</Link>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </div>
          )}
          <form class="navbar-form navbar-left">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Search" />
            </div>
            <button type="submit" class="btn btn-default">
              Submit
            </button>
            <Link to="/cart"> Cart</Link>
          </form>
        </div>
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
