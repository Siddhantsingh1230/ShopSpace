import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllCategories } from "../api/category";

const initialState = {
  categories: [],
  status: "idle",
  error: null,
};

export const getAllCategoriesAsync = createAsyncThunk(
  "categories/get",
  async () => {
    const data = await getAllCategories();
    return data;
  }
);

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategoriesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllCategoriesAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.categories = action.payload;
      })
      .addCase(getAllCategoriesAsync.rejected, (state, action) => {
        state.status = "idle";
      });
  },
});
export const { increment } = categorySlice.actions;
export default categorySlice.reducer;
