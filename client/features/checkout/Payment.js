import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { processPay, fulfillOrder } from "../checkout/checkoutSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Payment = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart } = props;
  const TOKEN = "token";
  const token = window.localStorage.getItem(TOKEN);

  const handlePayment = async () => {
    const token = window.localStorage.getItem(TOKEN);
    try {
      const { data } = await axios.post(
        `/api/payment/stripe/create-checkout-session`,
        { cart },
        {
          headers: {
            authorization: token,
          },
        }
      );
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  if (token) {
    return (
      <div>
        <button
          className="btn btn-dark"
          style={{
            fontFamily: "merel-black",
            color: "black",
            backgroundColor: "#F6BD60",
          }}
          onClick={() => {
            handlePayment();
          }}
        >
          Checkout & Pay
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <Link to={`/login`}>
          <button
            className="btn btn-dark"
            style={{
              fontFamily: "merel-black",
              color: "black",
              backgroundColor: "#F6BD60",
            }}
          >
            Login or Signup to Checkout
          </button>
        </Link>
      </div>
    );
  }
};

export default Payment;
