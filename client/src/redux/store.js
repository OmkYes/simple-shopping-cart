import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cart.slice"
import { publicApi } from "./apis/public.api";

const reduxStore = configureStore({
    reducer: {
        [publicApi.reducerPath]: publicApi.reducer,
        cart: cartSlice
    },
    middleware: def => [
        ...def(),
        publicApi.middleware
    ]

})

export default reduxStore