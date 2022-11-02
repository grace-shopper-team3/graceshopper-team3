import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "../cart/EmptyCart";
import FilledCart from "./FilledCart";
import { fetchCart } from "./cartSlice";

const Cart = (props) => {

  
  const TOKEN = 'token'
  const token = window.localStorage.getItem(TOKEN)

 let cart
   if (token){
  cart = useSelector((state) => state.cart.cart);
  } else{
  //  cart = JSON.parse(window.localStorage.getItem('products'))
  cart = useSelector((state) => state.cart.cart);
  }


  const userInfo = useSelector((state) => state.auth.me);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    userInfo ? dispatch(fetchCart()) : null;
  }, [dispatch]);

  

  return (
    <>{cart && cart.length ? <FilledCart cart={cart} /> : <EmptyCart />}</>
  );
};

export default Cart;
