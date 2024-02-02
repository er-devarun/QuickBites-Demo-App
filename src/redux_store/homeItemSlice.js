import {createSlice} from '@reduxjs/toolkit'

const homeItemSlice = createSlice({
    name: 'item',
    initialState: [],
    reducers: {
        addInitialItem: (state, action) => {
            return state = action.payload;
        },
    }

});

export const homeItemActions = homeItemSlice.actions;

export default homeItemSlice;