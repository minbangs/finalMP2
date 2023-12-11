import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./slices/cartSlice";
import wishSlice from "./slices/wishSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    wishlist: wishSlice,
  },
});

export default store;
