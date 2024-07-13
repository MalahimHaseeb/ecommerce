import { createSlice } from '@reduxjs/toolkit';

// Cart slice
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize with an empty array
  },
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existingItem = state.items.find(i => i.asin === item.asin);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.items.push(item);
      }
    },
    removeFromCart(state, action) {
      const asin = action.payload;
      state.items = state.items.filter(item => item.asin !== asin);
    },
    updateQuantity(state, action) {
      const { asin, quantity } = action.payload;
      const item = state.items.find(i => i.asin === asin);
      if (item) {
        item.quantity = quantity;
      }
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

