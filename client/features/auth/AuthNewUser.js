import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { authenticate } from "../../app/store";

const AuthNewUser = ({ name, displayName }) => {
  const { error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const name = evt.target.name.value;
    const email = evt.target.email.value;
    const username = evt.target.username.value;
    const password = evt.target.password.value;

    dispatch(
      authenticate({ name, email, username, password, method: "signup" })
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            <small>Name</small>
          </label>
          <input name="name" type="text" required />
        </div>
        <div>
          <label htmlFor="email">
            <small>E-mail</small>
          </label>
          <input name="email" type="email" required />
        </div>
        <div>
          <label htmlFor="username">
            <small>Username</small>
          </label>
          <input name="username" type="text" required />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" required />
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
        {error === "User already exists" ? (
          <div> {error} </div>
        ) : (
          console.log(error)
        )}
      </form>
    </div>
  );
};

export default AuthNewUser;
