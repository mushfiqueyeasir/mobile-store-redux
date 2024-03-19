import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartData: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const itemExists = state.cartData.some(
        (cartItem) => cartItem.Title === payload.Title
      );
      const existingCartItems = state.cartData || [];
      if (!itemExists) {
        existingCartItems.push(payload);
        localStorage.setItem("cart", JSON.stringify(existingCartItems));
        toast.success("Item added to cart!", {
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.error("Item is already in the cart!", {
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    },
    removeFromCart: (state, { payload }) => {
      const updatedItems = state.cartData.filter(
        (cartItem) => cartItem.Title !== payload.Title
      );
      localStorage.setItem("cart", JSON.stringify(updatedItems));
      toast.info("Item Removed!", {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return { cartData: updatedItems };
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
