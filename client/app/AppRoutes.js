import React, { useEffect, useState } from "react";
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

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const [shoppingCart, setShoppingCart] = useState([]);

  function addItemToCart(e) {
    const item = e.target.value;
    console.log("item", e.target);
    setShoppingCart([...shoppingCart, item]);
  }
  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/products"
            element={
              <AllProducts
                shoppingCart={shoppingCart}
                setShoppingCart={setShoppingCart}
                addItemToCart={addItemToCart}
              />
            }
          />
          <Route
            path="/products/:productId"
            element={
              <SingleProduct
                shoppingCart={shoppingCart}
                setShoppingCart={setShoppingCart}
                addItemToCart={addItemToCart}
              />
            }
          />
          <Route path="/cart" element={<Cart shoppingCart={shoppingCart} />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route
            path="/login"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route path="/signup" element={<AuthNewUser />} />
          <Route
            path="/products"
            element={
              <AllProducts
                shoppingCart={shoppingCart}
                setShoppingCart={setShoppingCart}
                addItemToCart={addItemToCart}
              />
            }
          />
          <Route
            path="/products/:productId"
            element={
              <SingleProduct
                shoppingCart={shoppingCart}
                setShoppingCart={setShoppingCart}
                addItemToCart={addItemToCart}
              />
            }
          />
          <Route path="/cart" element={<Cart shoppingCart={shoppingCart} />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
