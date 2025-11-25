import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// const { createAsyncThunk,createSlice } = require("@reduxjs/toolkit");

export const fetchProducts = createAsyncThunk('products', async () => {
    const resp = await fetch("https://dummyjson.com/products");
    const jsonResp = await resp.json();
    return jsonResp.products;
});

const initialState = {
    items: [],
    status: undefined,
    error: null
};

const productsSlice = createSlice({
    name: 'productsSlice',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = 'scucceeded';
            state.items = action.payload;
        })
    }
});

export default productsSlice.reducer;