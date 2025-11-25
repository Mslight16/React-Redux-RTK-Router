import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []
};

const addToCart = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            // state.value+=1;
            console.log(action.payload);
            state.items.push(action.payload);
            localStorage.setItem("cartItems", JSON.stringify(state.items));
        },
        removeItem: (state, action) => {
            //    state.value > 0? state.value -= 1 :null
            const cartData = state.items.filter(item => item.id != action.payload.id);
            state.items = cartData;
            localStorage.setItem("cartItems", JSON.stringify(state.items));
        },
        clearAllItems: (state) => {
            state.items = []

        }
    }

});


export const { clearAllItems, addItem, removeItem } = addToCart.actions;
export default addToCart.reducer;  