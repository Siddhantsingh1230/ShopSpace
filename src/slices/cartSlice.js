import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addTocart } from "../api/cart";

const initialState = {
  cart: [],
  status: "idle",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
  },
});

export default cartSlice.reducer;
