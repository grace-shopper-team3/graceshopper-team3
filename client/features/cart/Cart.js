import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "../cart/EmptyCart";
import FilledCart from "./FilledCart";
import { fetchCart } from "./CartSlice";

const Cart = (props) => {
  const cart = useSelector((state) => state.cart.cart);
  const userInfo = useSelector((state) => state.auth.me);
  const userId = userInfo.id;
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchCart(userId));
  }, [dispatch, userId]);

  return (
    <>
      {cart && cart.length ? (
        <FilledCart cart={cart} userId={userId} userInfo={userInfo} />
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
