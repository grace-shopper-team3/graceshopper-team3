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
import Checkout from "../features/checkout/checkout";
import { fetchCart } from "../features/cart/CartSlice";
import Navbar from "../features/navbar/Navbar";

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const userInfo = useSelector((state) => state.auth.me);
  const userId = userInfo.id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  useEffect(() => {
    dispatch(fetchCart(userId));
  }, [dispatch, userId]);

  // const cart = () => {
  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //     dispatch(fetchCart(userId));
  //   }, [dispatch, userId]);
  //   if (isLoggedIn) useSelector((state) => state.cart.cart);
  // };

  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  // const quantity =
  // console.log(
  //   cart.reduce((accum, element) => accum + element.quantityInCart, 0),
  //   "qty"
  // );
  // console.log(
  //   cart.reduce((accum, element) => accum + element.quantityInCart, 0)
  // );
  // console.log(quantity);
  return (
    <div>
      {isLoggedIn ? (
        <>
          <Navbar cart={cart} />
          <Routes>
            <Route path="/*" element={<Home cart={cart} />} />
            <Route path="/home" element={<Home cart={cart} />} />
            <Route path="/products" element={<AllProducts cart={cart} />} />
            <Route
              path="/products/:productId"
              element={<SingleProduct cart={cart} />}
            />
            <Route path="/cart" element={<Cart cart={cart} />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </>
      ) : (
        <>
          <Navbar cart={cart} />
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
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </>
      )}
    </div>
  );
};

export default AppRoutes;
