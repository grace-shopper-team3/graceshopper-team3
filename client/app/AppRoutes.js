import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AuthForm from "../features/auth/AuthForm";
import Home from "../features/home/Home";
import AllProducts from "../features/AllProducts/AllProducts";
import SingleProduct from "../features/singleProduct/SingleProduct";
import { me } from "./store";

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route to="/home" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:productId" element={<SingleProduct />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route
            path="/login"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/signup"
            element={<AuthForm name="signup" displayName="Sign Up" />}
          />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:productId" element={<SingleProduct />} />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
