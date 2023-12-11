import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info(
          `Increased ${state.cartItems[itemIndex].productName} quantity`
        );
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success(
          `${action.payload.productName} added to cart successfully!`
        );
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.cartQuantity),
        0
      );
    },

    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );

      state.cartItems = nextCartItems;
      toast.info(`${action.payload.productName} removed from cart`);

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.cartQuantity),
        0
      );
    },

    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

        state.totalAmount = state.cartItems.reduce(
          (total, item) =>
            total + Number(item.price) * Number(item.cartQuantity),
          0
        );
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );

        state.cartItems = nextCartItems;
        toast.info(`${action.payload.productName} removed from cart`);
        
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        
        state.totalAmount = state.cartItems.reduce(
          (total, item) =>
            total + Number(item.price) * Number(item.cartQuantity),
          0
        );
      }
    },

    increaseCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success(
          `${action.payload.productName} added to cart successfully!`
        );
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.cartQuantity),
        0
      );
    },

    getTotal(state, action) {
      let { quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { cartQuantity } = cartItem;

          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          quantity: 0,
        }
      );

      state.totalQuantity = quantity;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decreaseCart,
  increaseCart,
  getTotal,
} = cartSlice.actions;
export default cartSlice.reducer;
