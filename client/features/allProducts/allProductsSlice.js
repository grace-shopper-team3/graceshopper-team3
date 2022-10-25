import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllProducts = createAsyncThunk("fetchProducts", async () => {
  const { data } = await axios.get(`api/products`); //check w backend route
  return data;
});

const allProductsSlice = createSlice({
  name: "allProducts",
  initialState: {
    allProducts: [],
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.allProducts = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

/*
  ACTIONS // check with react component to see how actions was imported
*/

export default allProductsSlice.reducer;
