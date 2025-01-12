import { configureStore } from '@reduxjs/toolkit'
import cartReducers from "./features/cartSlice.jsx"
export const store = configureStore({
  reducer: {
    cart: cartReducers
  },
})