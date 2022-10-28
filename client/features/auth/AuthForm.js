import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authenticate } from "../../app/store";
import { Link, useNavigate } from "react-router-dom";

/**
  The AuthForm component can be used for Login or Sign Up.
  Props for Login: name="login", displayName="Login"
  Props for Sign up: name="signup", displayName="Sign Up"
**/

const AuthForm = ({ name, displayName }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate;
  const { error } = useSelector((state) => state.auth);
  const { id } = useSelector((state) => state.auth.me);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const username = evt.target.username.value;
    const password = evt.target.password.value;
    await dispatch(authenticate({ username, password, method: "login" }));
    // navigate(`/${id}/home`);
  };
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   await dispatch(authenticate({ username, password, method: "login" }));
  //   setUsername("");
  //   setPassword("");
  //   // navigate(`/${id}/home`);
  // };

  return (
    <div>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://cdn.shopify.com/s/files/1/1052/2158/products/58145_Marvel_InfinitySaga_Iron_Man_MegaPOP_GLAM-WEB.png?v=1637702532"
                className="img-fluid"
                alt="Phone image"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form onSubmit={handleSubmit} name={name}>
                <div className="row">
                  <div className="d-grid gap-2">
                    <h2>Login</h2>
                  </div>
                  <div className="d-grid gap-2">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    {/* <input
                      type="text"
                      onChange={(e) => setUsername(e.target.value.username)}
                      required
                    /> */}

                    <input name="username" type="text" required />
                  </div>
                </div>
                <div className="row">
                  <div className="d-grid gap-2">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    {/* <input
                      type="password"
                      onChange={(e) => setUsername(e.target.value.password)}
                      required
                    /> */}
                    <input name="password" type="password" required />
                  </div>
                </div>
                <div className="row">
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">
                      {displayName}
                    </button>
                    <small>
                      New to Punko? <Link to="/signup">Sign up now</Link>
                    </small>
                  </div>
                  <div style={{ color: "red" }}> {error} </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuthForm;
