import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bag: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.bag.find((i) => i.id === action.payload.id);
            if (item) item.qty += 1;
            else state.bag.push({ ...action.payload, qty: 1 });
            localStorage.setItem("cart", JSON.stringify(state.bag));
        },
        incrementQty: (state, action) => {
            const item = state.bag.find((i) => i.id === action.payload);
            if (item) item.qty += 1;
            localStorage.setItem("cart", JSON.stringify(state.bag));
        },
        decrementQty: (state, action) => {
            const item = state.bag.find((i) => i.id === action.payload);
            if (item && item.qty > 1) item.qty -= 1;
            localStorage.setItem("cart", JSON.stringify(state.bag));
        },
        clearCart: (state) => {
            state.bag = [];
            localStorage.removeItem("cart");
        },
    },
});

export const { addToCart, incrementQty, decrementQty, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
