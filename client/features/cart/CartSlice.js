import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCart = createAsyncThunk("fetchOrder_Products", async () => {
  try {
    const { data } = await axios.get(`/api/order_products`); //check w backend route
    return data;
  } catch (error) {
    console.log(error);
  }
  //will fix this later when api is setup
});

export const addItemToCart = createAsyncThunk("addOrder_Product", async () => {
  try {
    const { data } = await axios.post(`/api/order_products`); //check w backend route
    return data;
    //will fix this later when api is setup
  } catch (error) {
    console.log(error);
  }
});

export const incrementItemInCart = createAsyncThunk(
  "addOrder_Product",
  async () => {
    try {
      const { data } = await axios.put(`/api/order_products`); //check w backend route
      return data;
      //will fix this later when api is setup
    } catch (error) {
      console.log(error);
    }
  }
);

export const decrementItemInCart = createAsyncThunk(
  "addOrder_Product",
  async () => {
    try {
      const { data } = await axios.put(`/api/order_products`); //check w backend route
      return data;
      //will fix this later when api is setup
    } catch (error) {
      console.log(error);
    }
  }
);

export const removeFromCart = createAsyncThunk(
  "fetchOrder_Products",
  async () => {
    try {
      const { data } = await axios.delete(`/api/order_products`); //check w backend route
      return data;
      //will fix this later when api is setup
    } catch (error) {
      console.log(error);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.cart = action.payload;
    });
    // builder.addCase(addItemToCart.fulfilled, (state, action) => {
    //   state.cart = action.payload;
    // });
    // builder.addCase(incrementItemInCart.fulfilled, (state, action) => {
    //   state.cart = action.payload;
    // });
    // builder.addCase(decrementItemInCart.fulfilled, (state, action) => {
    //   state.cart = action.payload;
    // });
    // builder.addCase(removeFromCart.fulfilled, (state, action) => {
    //   state.cart = action.payload;
    // });
  },
});
export const selectCart = (state) => {
  return state.cart;
};

export default cartSlice.reducer;
