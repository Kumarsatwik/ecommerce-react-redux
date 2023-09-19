import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { id, price } = action.payload;

      const existingItem = state.cartItems.findIndex((item) => item.id === id);

      // console.log(state.cartItems[existingItem]?.cartQuantity);
      if (existingItem == -1) {
        // If the item doesn't exist in the cart, add it with a quantity of 1.
        state.cartItems.push({ ...action.payload, cartQuantity: 1 });
      } else {
        // If the item already exists, increase its quantity.
        existingItem.cartQuantity += 1;
      }

      state.totalQuantity += 1;
      state.totalPrice += price;
    },
    increaseQuantity(state, action) {
      const item = state.cartItems.find(
        (product) => product.id === action.payload
      );
      if (item) {
        item.cartQuantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += item.price;
      }
    },
    decreaseQuantity(state, action) {
      const item = state.cartItems.find((product) => product.id === action.payload);

      if (item && item.cartQuantity >= 1) {
        item.cartQuantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= item.price;
      }
    },
    removeCart(state, action) {
      const removedItemId = action.payload;
      const removedItem = state.cartItems.find(
        (item) => item.id === removedItemId
      );

      if (removedItem) {
        // Decrease total quantity by the quantity of the removed item
        state.totalQuantity -= removedItem.cartQuantity;
        // Decrease total price by the price of the removed item multiplied by its quantity
        state.totalPrice -= removedItem.price * removedItem.cartQuantity;

        // Remove the item from the cart
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== removedItemId
        );
      }
    },
  },
});

export const { addToCart, removeCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice;
