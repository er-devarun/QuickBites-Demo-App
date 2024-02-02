import { createSlice } from "@reduxjs/toolkit";

const searchItemSlice = createSlice({
    name: 'search',
    initialState: '',
    reducers: {
        setSearch: (state, action) => {
            return state = action.payload;
        },
    }
});

export const searchItemActions = searchItemSlice.actions;

export default searchItemSlice;