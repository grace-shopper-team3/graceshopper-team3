import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSingleProduct } from '../singleProduct/singleProductSlice';
import axios from "axios";

const TOKEN = 'token';

export const fetchCart = createAsyncThunk(
  "fetchOrder_Products",
  async (userId) => {
    // const token = window.localStorage.getItem(TOKEN);
    if(token) {
      const { data } = await axios.get(`/api/order_products/${userId}/cart`);
      return data;
    }else{
      return JSON.parse(window.localStorage.products)
    }
  }
);

export const addItemToCart = createAsyncThunk(
  "addOrder_Product",
  async ({ userId, productId }) => {
    const token = window.localStorage.getItem(TOKEN);
    if(token) {
      const { data } = await axios.post(`/api/order_products/${userId}/cart`, {
        productId,
      });
      console.log(data)
      return data;

    } else  {
      const { data } = await axios.get(`/api/products/${productId}`);
      console.log('productData',data)
      window.localStorage.setItem('products', JSON.stringify(data))
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
      await axios.delete(`/api/order_products/${userId}/${productId}/cart`, {
        productId,
      });
      return productId;
    } catch (error) {
      console.log(error);
    }
  }
);

export const compareCarts = createAsyncThunk(
	'/cart/compare',
	async (user, {dispatch}) => {
		const localArray = JSON.parse(window.localStorage.products)
		window.localStorage.products = JSON.stringify([])
		await dispatch(removeAllFromCart(user.products))
		await dispatch(addAllToCart(localArray))
		await dispatch(fetchCart())
	}
)

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
