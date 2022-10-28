import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { authenticate } from "../../app/store";

/**
  The AuthForm component can be used for Login or Sign Up.
  Props for Login: name="login", displayName="Login"
  Props for Sign up: name="signup", displayName="Sign Up"
**/

const AuthForm = ({ name, displayName }) => {
  const { error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const username = evt.target.username.value;
    const password = evt.target.password.value;
    dispatch(authenticate({ username, password, method: "login" }));
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
                alt="Phone image"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form onSubmit={handleSubmit} name={name}>
                <div className="row">
                  <div class="d-grid gap-2">
                    <label htmlFor="username" class="form-label">
                      Username
                    </label>
                    <input name="username" type="text" required />
                  </div>
                </div>
                <div className="row">
                  <div class="d-grid gap-2">
                    <label htmlFor="password" class="form-label">
                      Password
                    </label>
                    <input name="password" type="password" required />
                  </div>
                </div>
                <div className="row">
                  <div class="d-grid gap-2">
                    <button type="submit" class="btn btn-primary">
                      {displayName}
                    </button>
                  </div>
                  {error === "Incorrect username/password" ? (
                    <div style={{ color: "red" }}> {error} </div>
                  ) : (
                    console.log(error)
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>

    // <div>
    //   {/* <form onSubmit={handleSubmit} name={name}> */}
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <label htmlFor="username">
    //         <small>Username</small>
    //       </label>
    //       <input name="username" type="text" required />
    //     </div>
    //     <div>
    //       <label htmlFor="password">
    //         <small>Password</small>
    //       </label>
    //       <input name="password" type="password" required />
    //     </div>
    //     <div>
    //       <button type="submit">{displayName}</button>
    //     </div>
    //     {error && <div> {error} </div>}
    //   </form>
    // </div>
  );
};

export default AuthForm;
