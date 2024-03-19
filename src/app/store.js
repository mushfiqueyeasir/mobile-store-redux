import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import dataSlice from "../features/data/dataSlice";

export const store = configureStore({
  reducer: { data: dataSlice, cart: cartSlice },
});
