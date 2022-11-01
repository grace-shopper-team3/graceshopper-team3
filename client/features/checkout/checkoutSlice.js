import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const TOKEN = "token";

export const fulfillOrder = createAsyncThunk("fulfillment", async () => {
  const token = window.localStorage.getItem(TOKEN);
  const { data } = await axios.put(
    `/api/orders/checkout`,
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
      });
  },
});

export default checkoutSlice.reducer;
