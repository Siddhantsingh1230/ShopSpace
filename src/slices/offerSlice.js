import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Adding All Offer related APIs
import { getPosters } from "../api/offers.js";

const initialState = {
  offers: [],
  status: "idle",
};

// adding offer AsyncThunks
export const getOffersAsync = createAsyncThunk(
  "offers/get",
  async (_, thunkAPI) => {
    try {
      const data = await getPosters();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const offersSlice = createSlice({
  name: "offers",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    //   increment: (state) => {
    //     state.value += 1;
    //   },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOffersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getOffersAsync.fulfilled, (state, action) => {
        state.status = "idle";
        console.log( action.payload)
        state.offers = action.payload.offers;
      })
      .addCase(getOffersAsync.rejected, (state, action) => {
        state.status = "idle";
        if (action.payload.response && action.payload.code !== "ERR_NETWORK") {
          console.log(
            "error",
            action.payload.response.data.message || "Error Occurred"
          );
        } else {
          console.log("error", "Network Error"); 
        }
      });
  },
});

export const {} = offersSlice.actions;

export default offersSlice.reducer;
