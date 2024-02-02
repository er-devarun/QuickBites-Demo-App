import cartItemSlice from "./cartItemSlice";
import categorySlice from "./categorySlice";
import homeItemSlice from "./homeItemSlice";
import {configureStore} from '@reduxjs/toolkit'
import searchItemSlice from "./searchItemSlice";

const quickBitesStore = configureStore({
    reducer: {
        homeItem: homeItemSlice.reducer,
        cartItem: cartItemSlice.reducer,
        activeCategory: categorySlice.reducer,
        searchItem: searchItemSlice.reducer,
    }
});

export default quickBitesStore;