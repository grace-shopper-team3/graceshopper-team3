import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleProduct = createAsyncThunk("fetchProduct", async (productId) => {
  const { data } = await axios.get(`/api/products/${productId}`); //check w backend route
  return data;
});

const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState: {
    singleProduct: {},
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.singleProduct = action.payload;
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

export default singleProductSlice.reducer;
