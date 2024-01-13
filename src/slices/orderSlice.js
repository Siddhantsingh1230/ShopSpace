import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createOrder,getOrders,deleteOrder } from "../api/order";

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

export const deleteOrderAsync = createAsyncThunk("order/delete", async ({id,userId}) => {
  const data = await deleteOrder({id,userId});
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
      .addCase(deleteOrderAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteOrderAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.orders = action.payload;
      })
      .addCase(deleteOrderAsync.rejected, (state) => {
        state.status = "idle";
      });
  },
});

export default orderSlice.reducer;
