import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: 'category',
    initialState: 'All',
    reducers: {
        setCategory: (state, action) => {
            return state = action.payload;
        },
    }
})

export const categoryActions = categorySlice.actions;

export default categorySlice;