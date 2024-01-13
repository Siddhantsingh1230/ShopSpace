import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Adding All DOD related APIs
import { getDealOfTheDay } from "../api/dealOfTheDay.js";

const initialState = {
  deal: null,
  status: "idle",
};

// ading DOD AsyncThunks
export const getDealAsync = createAsyncThunk(
  "dealoftheday/get",
  async (_, thunkAPI) => {
    try {
      const data = await getDealOfTheDay();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const dealOfTheDaySlice = createSlice({
  name: "dod",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    //   increment: (state) => {
    //     state.value += 1;
    //   },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDealAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getDealAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.deal = action.payload.deal;
      })
      .addCase(getDealAsync.rejected, (state, action) => {
        state.status = "idle";
        if (action.payload.response && action.payload.code !== "ERR_NETWORK") {
          console.log(
            "error",
            action.payload.response.data.message || "Error Occurred"
          );
        } else {
          console.log("DOD ERROR");
        }
      });
  },
});

export const {} = dealOfTheDaySlice.actions;

export default dealOfTheDaySlice.reducer;
