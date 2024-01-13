import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createOrder,getOrders,updateOrder } from "../api/order";

const initialState = {
  orders: null,
  status: "idle",
};

export const createOrderAsync = createAsyncThunk("order/add", async (order) => {
  const data = await createOrder(order);
  return data;
});

export const getOrderAsync = createAsyncThunk("order/get", async (userId) => {
  const data = await getOrders(userId);
  return data;
});

export const updateOrderAsync = createAsyncThunk("order/delete", async ({id,userId}) => {
  const data = await updateOrder({id,userId});
  return data;
});

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrderAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createOrderAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.orders = action.payload;
      })
      .addCase(createOrderAsync.rejected, (state) => {
        state.status = "idle";
      })
      .addCase(getOrderAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getOrderAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.orders = action.payload;
      })
      .addCase(getOrderAsync.rejected, (state) => {
        state.status = "idle";
      })
      .addCase(updateOrderAsync.pending, (state) => {
        state.status = "idle";
   })
      .addCase(updateOrderAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.orders = action.payload;
      })
      .addCase(updateOrderAsync.rejected, (state) => {
        state.status = "idle";
      });
  },
});

export default orderSlice.reducer;
