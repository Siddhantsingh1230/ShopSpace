import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Adding All Products related APIs
import { getAllProducts } from "../api/products.js";

const initialState = {
  products: [],
  allFetched: false,
  pagesReturned: 0,
  count: 0,
  status: "idle",
};

// adding Product AsyncThunks
export const getAllProductsAsync = createAsyncThunk(
  //actually this api is not fetching all products at once but in packets or quantized manner
  "products/get",
  async ({ page, quantum, searchKeyword }, thunkAPI) => {
    try {
      const data = await getAllProducts(page, quantum, searchKeyword);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    removeProducts: (state) => {
      state.products = [];
      state.pagesReturned = 0;  
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products.push(...action.payload.products);
        state.pagesReturned = parseInt(action.payload.pagesReturned);
        state.count = parseInt(action.payload.count);
        // state.allFetched = action.allFetched;
      })
      .addCase(getAllProductsAsync.rejected, (state, action) => {
        state.status = "idle";
        if (action.payload.response && action.payload.code !== "ERR_NETWORK") {
          console.log(action.payload.response.data.message || "Error Occurred");
        } else {
          console.log("Network Error");
        }
      });
  },
});

export const { removeProducts } = productSlice.actions;

export default productSlice.reducer;
