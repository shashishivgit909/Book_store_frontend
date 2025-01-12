import { createSlice } from '@reduxjs/toolkit'

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
                console.log("Items added succcessfully");
            } else {
                console.log("Items already in Cart");
            }
        },

    },
})

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions

export default cartSlice.reducer