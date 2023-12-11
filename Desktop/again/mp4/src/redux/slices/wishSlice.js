import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  wishlistItems: localStorage.getItem("wishlistItems")
    ? JSON.parse(localStorage.getItem("wishlistItems"))
    : [],
  totalQuantity: 0,
};

const wishSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const itemIndex = state.wishlistItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.wishlistItems[itemIndex].wishQuantity += 1;
        toast.info(
          ` ${state.wishlistItems[itemIndex].productName} already added to your wishlist`
        );
      } else {
        const tempProduct = { ...action.payload, wishQuantity: 1 };
        state.wishlistItems.push(tempProduct);
        toast.success(
          `${action.payload.productName} added to wishlist successfully!`
        );
      }

      localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems));
    },

    removeFromWishlist: (state, action) => {
      const nextWishlistItems = state.wishlistItems.filter(
        (wishlistItem) => wishlistItem.id !== action.payload.id
      );

      state.wishlistItems = nextWishlistItems;
      toast.info(`${action.payload.productName} removed from your wishlist`);

      localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems));
    },

    clearWishlist: (state, action) => {
      state.wishlistItems = [];
    },

    getTotalWish(state) {
      let { quantity } = state.wishlistItems.reduce(
        (wishTotal, wishlistItem) => {
          const { wishQuantity } = wishlistItem;

          wishTotal.quantity += wishQuantity;

          return wishTotal;
        },
        {
          quantity: 0,
        }
      );

      state.totalQuantity = quantity;
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist, getTotalWish } = wishSlice.actions;

export default wishSlice.reducer;
