import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import {getWishlist,removeProductFromWishlist} from "../api/wishlist";

const initialState = {
    wishlist :[],
    status: "idle"
}

export const getWishlistAsync = createAsyncThunk(
    "wishlist/get",
    async(id)=>{
        const data = await getWishlist(id);
        return data;
    }
);

export const removeProductFromWishlistAsync = createAsyncThunk(
  "wishlist/patch",
  async({id,productId})=>{
      const data = await removeProductFromWishlist(id,productId);
      return data;
  }
);

export const wishlistSlice = createSlice({
    name : "wishlist",
    initialState,
    reducers : {},
    extraReducers : (builder)=>{
        builder
        .addCase(getWishlistAsync.pending, (state) => {
            state.status = "loading";
          })
          .addCase(getWishlistAsync.fulfilled, (state, action) => {
            state.status = "idle";
            state.wishlist = action.payload;
          })
          .addCase(getWishlistAsync.rejected, (state, action) => {
            state.status = "idle";
          })
          .addCase(removeProductFromWishlistAsync.pending, (state) => {
            state.status = "loading";
          })
          .addCase(removeProductFromWishlistAsync.fulfilled, (state, action) => {
            state.status = "idle";
            state.wishlist = action.payload;
          })
          .addCase(removeProductFromWishlistAsync.rejected, (state, action) => {
            state.status = "idle";
          });
    }
});

export default wishlistSlice.reducer;