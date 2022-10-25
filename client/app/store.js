import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../features/auth/authSlice";
import allProductsSliceReducer from "../features/allProducts/allProductsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    allProducts: allProductsSliceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/auth/authSlice";
export * from "../features/allProducts/allProductsSlice"; // probably don't need this
