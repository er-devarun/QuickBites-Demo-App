import { createSlice } from "@reduxjs/toolkit";

const cartItemSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload);
        },
        removeFromCart: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },
        incrementQty: (state, action) => {
            return state = state.map((item) => item.id === action.payload.id ? {...item, price: item.price + item.price/item.qty, qty: item.qty + 1} : item);
        },
        decrementQty: (state, action) => {
            return state = state.map((item) => item.id === action.payload.id && item.qty > 1 ? {...item, price: item.price - item.price/item.qty, qty: item.qty - 1} : item);
        },
        clearCart: (state, action) => {
            return state = [];
        },
    }
})

export const cartItemActions = cartItemSlice.actions;

export default cartItemSlice;