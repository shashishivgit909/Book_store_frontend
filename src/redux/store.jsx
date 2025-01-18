import { configureStore } from '@reduxjs/toolkit'
import cartReducers from "./features/cartSlice.jsx";
import { bookAPI } from './features/books/bookApis.js';
export const store = configureStore({
  reducer: {
    cart: cartReducers,
    [bookAPI.reducerPath]:bookAPI.reducer
  },
})