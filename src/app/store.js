import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/productSlice/productSlice";
import cartSlice from "../features/cartSlice/cartSlice";
import orderHistroy from "../features/orderHistroy/orderHistroy";

export const store = configureStore({
  reducer: {
    products : productSlice,
    cart : cartSlice ,
    order : orderHistroy
  },
});