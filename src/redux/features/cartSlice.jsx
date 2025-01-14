import { createSlice } from '@reduxjs/toolkit'
import Swal from 'sweetalert2';
const initialState = {
    cartItems: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const isExisting = state.cartItems.find((item) => item._id === action.payload._id);
            if (!isExisting) {
                state.cartItems.push(action.payload);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Product added to cart",
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                // console.log("Items already in Cart");

                Swal.fire({
                    title: "",
                    text: "Product already in cart !",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                })
            }
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => {
                return item._id !== action.payload._id;
            });
        },
        clearCart: (state) => {
            state.cartItems = [];
        }

    },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions

export default cartSlice.reducer