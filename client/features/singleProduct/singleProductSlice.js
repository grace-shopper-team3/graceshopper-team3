import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleProduct = createAsyncThunk(
  "fetchProduct",
  async (productId) => {
    const { data } = await axios.get(`/api/products/${productId}`);
    return data;
  }
);

const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState: {
    aProduct: {},
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.aProduct = action.payload;
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

export default singleProductSlice.reducer;
