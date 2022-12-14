import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../features/auth/authSlice";
import allProductsSliceReducer from "../features/allProducts/allProductsSlice";
import singleProductSliceReducer from "../features/singleProduct/singleProductSlice";
import cartSliceReducer from "../features/cart/cartSlice";
import checkoutSliceReducer from "../features/checkout/checkoutSlice";
import historySliceReducer from "../features/auth/historySlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    allProducts: allProductsSliceReducer,
    singleProduct: singleProductSliceReducer,
    cart: cartSliceReducer,
    checkoutOrder: checkoutSliceReducer,
    ordersHistory: historySliceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/auth/authSlice";
export * from "../features/allProducts/allProductsSlice"; // probably don't need this
