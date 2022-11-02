import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/*
  CONSTANT VARIABLES
*/
const TOKEN = "token";

export const getOrdersHistory = createAsyncThunk(
  "auth/authenticate",
  async () => {
    const token = window.localStorage.getItem(TOKEN);

    const { data } = await axios.get(`/api/orders/history`, {
      headers: {
        authorization: token,
      },
    });
    return data;
  }
);

const historySlice = createSlice({
  name: "ordersHistory",
  initialState: {
    allOrders: [],
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getOrdersHistory.fulfilled, (state, action) => {
        state.allOrders = action.payload;
      })
      .addCase(getOrdersHistory.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

export default historySlice.reducer;
