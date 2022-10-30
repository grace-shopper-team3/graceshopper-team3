import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fulfillOrder = createAsyncThunk("fulfillment", async (userId) => {
  console.log("checking userId arg", userId);
  const { data } = await axios.put(`/api/orders/${userId}/checkout`);
  console.log("thunk data", data);
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
        console.log("ACTION PAYLOAD", action.payload);
        state.fulfilledOrder = action.payload;
      })
      .addCase(fulfillOrder.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

export default checkoutSlice.reducer;
