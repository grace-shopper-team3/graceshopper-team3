import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authenticate } from "../../app/store";
import { Link } from "react-router-dom";

const AuthNewUser = ({ name }) => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const name = evt.target.name.value;
    console.log("name", name);
    const email = evt.target.email.value;
    const username = evt.target.username.value;
    const password = evt.target.password.value;

    dispatch(
      authenticate({ name, email, username, password, method: "signup" })
    );
  };

  return (
    <div>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://cdn.shopify.com/s/files/1/1052/2158/products/58145_Marvel_InfinitySaga_Iron_Man_MegaPOP_GLAM-WEB.png?v=1637702532"
                className="img-fluid"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form onSubmit={handleSubmit} name={name}>
                <div className="row">
                  <div className="d-grid gap-2">
                    <h2>Sign Up</h2>
                  </div>
                  <div className="d-grid gap-2">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input name="name" pattern="\S+" type="text" required />
                  </div>

                  <div className="d-grid gap-2">
                    <label htmlFor="email">E-mail</label>
                    <input
                      name="email"
                      pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                      type="email"
                      required
                    />
                  </div>

                  <div className="d-grid gap-2">
                    <label htmlFor="username">Username</label>
                    <input name="username" type="text" pattern="\S+" required />
                  </div>

                  <div className="d-grid gap-2">
                    <label htmlFor="password">Password</label>
                    <input
                      name="password"
                      pattern="\S+"
                      type="password"
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">
                      Sign Up
                    </button>
                    <small>
                      Already have an account? <Link to="/login">Log in</Link>
                    </small>
                  </div>
                  {error ? <div style={{ color: "red" }}> {error} </div> : null}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuthNewUser;
