import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSingleProduct } from "../singleProduct/singleProductSlice";
import axios from "axios";
const TOKEN = "token";

export const fetchCart = createAsyncThunk("fetchOrder_Products", async () => {
  const token = window.localStorage.getItem(TOKEN);
  if (token) {
    try {
      const { data } = await axios.get(`/api/order_products/cart`, {
        headers: {
          authorization: token,
        },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  } else {
    return JSON.parse(window.localStorage.products);
  }
});

export const addItemToCart = createAsyncThunk(
  "addOrder_Product",
  async ({ productId }, { dispatch }) => {
    const token = window.localStorage.getItem(TOKEN);
    if (token) {
      try {
        const { data } = await axios.post(
          `/api/order_products/cart`,
          {
            productId,
          },
          {
            headers: {
              authorization: token,
            },
          }
        );
        return data;
      } catch (error) {
        console.log(error);
      }
    } else {
      const { payload } = await dispatch(fetchSingleProduct(productId));

      let product = {};
      for (let key in payload) {
        product[key] = payload[key];
      }

      if (!product["quantityInCart"]) {
        product["quantityInCart"] = 1;
      }
      return product;
    }
  }
);

export const incrementItemInCart = createAsyncThunk(
  "incrementOrder_Product",
  async ({ productId, quantityInCart }, { dispatch }) => {
    const token = window.localStorage.getItem(TOKEN);
    if (token) {
      try {
        quantityInCart++;
        const { data } = await axios.put(
          `/api/order_products/cart`,
          {
            productId,
            quantityInCart,
          },
          {
            headers: {
              authorization: token,
            },
          }
        );
        return data;
      } catch (error) {
        console.log(error);
      }
    } else {
      let localArray = JSON.parse(window.localStorage.getItem("products"));
      for (let i = 0; i < localArray.length; i++) {
        if (localArray[i].id === productId) {
          localArray[i].quantityInCart++;
        }
      }
      window.localStorage.setItem("products", JSON.stringify(localArray));
    }
  }
);

export const decrementItemInCart = createAsyncThunk(
  "decrementOrder_Product",
  async ({ productId, quantityInCart }) => {
    const token = window.localStorage.getItem(TOKEN);
    if (token) {
      try {
        quantityInCart--;
        const { data } = await axios.put(
          `/api/order_products/cart`,
          {
            productId,
            quantityInCart,
          },
          {
            headers: {
              authorization: token,
            },
          }
        );
        return data;
      } catch (error) {
        console.log(error);
      }
    } else {
      let localArray = JSON.parse(window.localStorage.getItem("products"));
      for (let i = 0; i < localArray.length; i++) {
        if (localArray[i].id === productId) {
          if (localArray[i].quantityInCart > 2) {
            localArray[i].quantityInCart--;
          } else {
            localArray[i].quantityInCart = 1;
          }
        }
      }
      window.localStorage.setItem("products", JSON.stringify(localArray));
    }
  }
);

export const removeFromCart = createAsyncThunk(
  "deleteOrder_Product",
  async ({ productId }) => {
    const token = window.localStorage.getItem(TOKEN);
    if (token) {
      try {
        await axios.delete(`/api/order_products/${productId}/cart`, {
          headers: {
            authorization: token,
          },
        });
        return productId;
      } catch (error) {
        console.log(error);
      }
    } else {
      let localArray = JSON.parse(window.localStorage.getItem("products"));
      localArray = localArray.filter((product) => product.id !== productId);
      window.localStorage.products = JSON.stringify(localArray);
    }
  }
);

let localArry = [];
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      const token = window.localStorage.getItem(TOKEN);
      if (token) {
        state.cart = action.payload;
      } else {
        state.cart = JSON.parse(window.localStorage.getItem("products"));
      }
    });

    builder.addCase(addItemToCart.fulfilled, (state, action) => {
      const token = window.localStorage.getItem(TOKEN);
      if (token) {
        if (!state.cart) {
          state.cart = action.payload;
        } else if (state.cart.length > 1) {
          state.cart.push(action.payload);
        }
      } else {
        let init = false;
        for (let i = 0; i < localArry.length; i++) {
          if (localArry[i].id === action.payload.id) {
            init = true;
            localArry[i].quantityInCart++;
          }
        }
        if (!init) {
          localArry.push(action.payload);
        }
        window.localStorage.setItem("products", JSON.stringify(localArry));
      }
    });

    builder.addCase(incrementItemInCart.fulfilled, (state, action) => {
      const token = window.localStorage.getItem(TOKEN);
      if (token) {
        state.cart = state.cart.map((item) => {
          let product = item.product;
          if (item.productId === action.payload.productId) {
            item = action.payload;
            item["product"] = product;
          }
          return item;
        });
      }
    });

    builder.addCase(decrementItemInCart.fulfilled, (state, action) => {
      const token = window.localStorage.getItem(TOKEN);
      if (token) {
        state.cart = state.cart.map((item) => {
          let product = item.product;
          if (item.productId === action.payload.productId) {
            item = action.payload;
            item["product"] = product;
          }
          return item;
        });
      }
    });

    builder.addCase(removeFromCart.fulfilled, (state, action) => {
      const token = window.localStorage.getItem(TOKEN);
      if (token) {
        state.cart = state.cart.filter(
          (product) => product.productId !== action.meta.arg.productId
        );
      }
    });
  },
});
export const selectCart = (state) => {
  return state.cart;
};

export default cartSlice.reducer;
