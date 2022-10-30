import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCart = createAsyncThunk(
  "fetchOrder_Products",
  async (userId) => {
    try {
      const { data } = await axios.get(`/api/order_products/${userId}/cart`);
      console.log(`data for axios GET request`, data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addItemToCart = createAsyncThunk(
  "addOrder_Product",
  async ({ userId, productId }) => {
    try {
      const { data } = await axios.post(`/api/order_products/${userId}/cart`, {
        productId,
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const incrementItemInCart = createAsyncThunk(
  "incrementOrder_Product",
  async ({ userId, productId, quantityInCart }) => {
    try {
      quantityInCart++;
      const { data } = await axios.put(`/api/order_products/${userId}/cart`, {
        productId,
        quantityInCart,
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const decrementItemInCart = createAsyncThunk(
  "decrementOrder_Product",
  async ({ userId, productId, quantityInCart }) => {
    try {
      quantityInCart--;
      const { data } = await axios.put(`/api/order_products/${userId}/cart`, {
        productId,
        quantityInCart,
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const removeFromCart = createAsyncThunk(
  "deleteOrder_Product",
  async ({ userId, productId }) => {
    try {
      console.log("made it to removeFromCart cart!", userId, productId);
      await axios.delete(`/api/order_products/${userId}/${productId}/cart`, {
        productId,
      });
      return productId;
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
    builder.addCase(addItemToCart.fulfilled, (state, action) => {
      state.cart.push(action.payload);
    });
    builder.addCase(incrementItemInCart.fulfilled, (state, action) => {
      state.cart = state.cart.map((item) => {
        let product = item.product;
        if (item.productId === action.payload.productId) {
          item = action.payload;
          item["product"] = product;
        }
        return item;
      });
    });
    builder.addCase(decrementItemInCart.fulfilled, (state, action) => {
      console.log("state.cart", state.cart);
      state.cart = state.cart.map((item) => {
        let product = item.product;
        if (item.productId === action.payload.productId) {
          item = action.payload;
          item["product"] = product;
        }
        return item;
      });
    });
    builder.addCase(removeFromCart.fulfilled, (state, action) => {
      state.cart = state.cart.filter(
        (product) => product.productId !== action.meta.arg.productId
      );
    });
  },
});
export const selectCart = (state) => {
  return state.cart;
};

export default cartSlice.reducer;
