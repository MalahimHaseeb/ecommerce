import { createSlice } from '@reduxjs/toolkit';

// Order history slice
const orderHistorySlice = createSlice({
  name: 'orderHistory',
  initialState: {
    orders: [], // Initialize with an empty array
  },
  reducers: {
    addOrder(state, action) {
      const newOrder = action.payload;
      state.orders.push(newOrder);
    },
  },
});

export const { addOrder } = orderHistorySlice.actions;
export default orderHistorySlice.reducer;
