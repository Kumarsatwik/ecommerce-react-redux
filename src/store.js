import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducer/productSlice";
import cartSlice from "./reducer/cartSlice";

const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
