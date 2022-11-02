import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AuthForm from "../features/auth/AuthForm";
import AuthNewUser from "../features/auth/AuthNewUser";
import Home from "../features/home/Home";
import AllProducts from "../features/allProducts/AllProducts";
import SingleProduct from "../features/singleProduct/SingleProduct";
import Cart from "../features/cart/Cart";
import { me } from "./store";
import Checkout from "../features/checkout/Checkout";
import Profile from "../features/auth/Profile";
import Navbar from "../features/navbar/Navbar";

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  const cart = useSelector((state) => state.cart.cart);

  return (
    <div>
      {isLoggedIn ? (
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:productId" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout-success" element={<Checkout />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route
            path="/login"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route path="/signup" element={<AuthNewUser />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:productId" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout-success" element={<Checkout />} />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
