import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./wishlistSlice.js";
import cartReducer from "./cartSlice.js";

export type RootState = ReturnType<typeof store.getState>;


export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    cart: cartReducer,
  },
});
