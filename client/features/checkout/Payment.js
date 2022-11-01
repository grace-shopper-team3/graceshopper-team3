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

  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => {
          handlePayment();
        }}
      >
        Checkout & Pay
      </button>
    </div>
  );
};

export default Payment;
