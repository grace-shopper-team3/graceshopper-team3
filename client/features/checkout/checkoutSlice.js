import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const TOKEN = "token";

// export const processPay = createAsyncThunk("payViaStripe", async ({ cart }) => {
//   const token = window.localStorage.getItem(TOKEN);
//   const { data } = await axios.post(
//     `/api/payment/stripe/create-checkout-session`,
//     { cart },
//     {
//       headers: {
//         authorization: token,
//       },
//     }
//   );
//   return data;
// });

export const fulfillOrder = createAsyncThunk("fulfillment", async () => {
  const token = window.localStorage.getItem(TOKEN);
  const { data } = await axios.put(
    `/api/orders/checkout-success`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
  return data;
});

const checkoutSlice = createSlice({
  name: "checkoutOrder",
  initialState: {
    //paid: {},
    fulfilledOrder: [],
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fulfillOrder.fulfilled, (state, action) => {
        state.fulfilledOrder = action.payload;
      })
      .addCase(fulfillOrder.rejected, (state, action) => {
        state.error = action.error;
      })
      // .addCase(processPay.fulfilled, (state, action) => {
      //   state.paid = action.payload;
      // });
  },
});

export default checkoutSlice.reducer;
