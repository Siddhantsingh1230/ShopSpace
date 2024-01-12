import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCart, removeCart, updateCart } from "../api/cart.js";

const initialState = {
  cart: [],
  status: "idle",
};

export const getCartAsync = createAsyncThunk("cart/get", async (userId) => {
  const data = await getCart(userId);
  return data;
});

export const removeCartAsync = createAsyncThunk(
  "cart/delete",
  async ({ id, userId }) => {
    const data = await removeCart({id, userId});
    return data;
  }
);

export const updateCartAsync = createAsyncThunk(
  "cart/update",
  async ({ userId, productId, quantity }) => {
    const data = await updateCart({ userId, productId, quantity });
    return data;
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCartAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.cart = action.payload;
      })
      .addCase(getCartAsync.rejected, (state) => {
        state.status = "idle";
      })
      .addCase(removeCartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(removeCartAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.cart = action.payload;
      })
      .addCase(removeCartAsync.rejected, (state) => {
        state.status = "idle";
      })
      .addCase(updateCartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateCartAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.cart = action.payload;
      })
      .addCase(updateCartAsync.rejected, (state) => {
        state.status = "idle";
      });
  },
});

export default cartSlice.reducer;
