import { configureStore } from '@reduxjs/toolkit'
import cartReducers from "./features/cart/cartSlice.jsx";
import { bookAPI } from './features/books/bookApis.js';
import { orderApi } from './features/orders/orderApis.js';
export const store = configureStore({
  reducer: {
    cart: cartReducers,
    [bookAPI.reducerPath]: bookAPI.reducer,
    [orderApi.reducerPath]:orderApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookAPI.middleware,orderApi.middleware)
})