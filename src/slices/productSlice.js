import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Adding All Products related APIs
import {
  getAllProducts,
  getLatestProducts,
  getRecommendations,
  getTopRated,
  getTopViewed,
  getBestSeller
} from "../api/products.js";

const initialState = {
  products: [],
  topViewed: [],
  topRated: [],
  latestProducts: [],
  recommended: [],
  bestSelled: [],
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
export const getTopProductsAsync = createAsyncThunk(
  //actually this api is not fetching all products at once but in packets or quantized manner
  "products/topProducts",
  async (_, thunkAPI) => {
    try {
      const data = await getTopViewed();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getTopRatedProductsAsync = createAsyncThunk(
  //actually this api is not fetching all products at once but in packets or quantized manner
  "products/topRatedProducts",
  async (_, thunkAPI) => {
    try {
      const data = await getTopRated();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getLatestProductsAsync = createAsyncThunk(
  //actually this api is not fetching all products at once but in packets or quantized manner
  "products/topLatestProducts",
  async (_, thunkAPI) => {
    try {
      const data = await getLatestProducts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getRecommendationsAsync = createAsyncThunk(
  //actually this api is not fetching all products at once but in packets or quantized manner
  "products/getRecommendedProducts",
  async (_, thunkAPI) => {
    try {
      const data = await getRecommendations();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getBestSelledAsync = createAsyncThunk(
  //actually this api is not fetching all products at once but in packets or quantized manner
  "products/getBestSelled",
  async (_, thunkAPI) => {
    try {
      const data = await getBestSeller();
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
      })
      .addCase(getAllProductsAsync.rejected, (state, action) => {
        state.status = "idle";
        if (action.payload.response && action.payload.code !== "ERR_NETWORK") {
          console.log(action.payload.response.data.message || "Error Occurred");
        } else {
          console.log("Network Error");
        }
      })
      .addCase(getTopProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getTopProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.topViewed = action.payload.products;
      })
      .addCase(getTopProductsAsync.rejected, (state, action) => {
        state.status = "idle";
        if (action.payload.response && action.payload.code !== "ERR_NETWORK") {
          console.log(action.payload.response.data.message || "Error Occurred");
        } else {
          console.log("Network Error");
        }
      })
      .addCase(getTopRatedProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getTopRatedProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.topRated = action.payload.products;
      })
      .addCase(getTopRatedProductsAsync.rejected, (state, action) => {
        state.status = "idle";
        if (action.payload.response && action.payload.code !== "ERR_NETWORK") {
          console.log(action.payload.response.data.message || "Error Occurred");
        } else {
          console.log("Network Error");
        }
      })
      .addCase(getLatestProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getLatestProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.latestProducts = action.payload.products;
      })
      .addCase(getLatestProductsAsync.rejected, (state, action) => {
        state.status = "idle";
        if (action.payload.response && action.payload.code !== "ERR_NETWORK") {
          console.log(action.payload.response.data.message || "Error Occurred");
        } else {
          console.log("Network Error");
        }
      })
      .addCase(getRecommendationsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getRecommendationsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.recommended = action.payload.products;
      })
      .addCase(getRecommendationsAsync.rejected, (state, action) => {
        state.status = "idle";
        if (action.payload.response && action.payload.code !== "ERR_NETWORK") {
          console.log(action.payload.response.data.message || "Error Occurred");
        } else {
          console.log("Network Error");
        }
      }).addCase(getBestSelledAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getBestSelledAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.bestSelled = action.payload.products;
      })
      .addCase(getBestSelledAsync.rejected, (state, action) => {
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
