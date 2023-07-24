import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api.js";

export const getUserData = createAsyncThunk(
  "user/data",
  async ({ token }, { rejectWithValue }) => {
    try {
      const response = await api.readData(token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getUser = createAsyncThunk(
  "user/userdata",
  async ({ token }, { rejectWithValue }) => {
    try {
      const response = await api.getUser(token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const checkoutItem = createAsyncThunk(
  "user/Checkout",
  async ({ token, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.checkoutShoes(token);
      navigate("/UserProfile");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getOrder = createAsyncThunk(
  "user/getorder",
  async ({ token }, { rejectWithValue }) => {
    try {
      const response = await api.getuserorder(token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const receivedItem = createAsyncThunk(
  "user/received",
  async ({ token }, { rejectWithValue }) => {
    try {
      const response = await api.receivedShoes(token);
      // navigate("/UserProfile");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getReceivedItem = createAsyncThunk(
  "user/getReceived",
  async ({ token }, { rejectWithValue }) => {
    try {
      const response = await api.getusereceived(token);
      // navigate("/UserProfile");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
const userData = createSlice({
  name: "data",
  initialState: {
    loading: false,
    error: null,
    selectedItem: null,
    items: [],
    info: [],
    checkout: [],
    orderData: [],
    receivedData: [],
  },
  reducers: {
    resetData: (state) => {
      state.items = [];
      state.info = [];
      (state.checkout = []), (state.receivedData = []);
    },
    cleanCart: (state) => {
      state.items = [];
    },
    cleanOrdered: (state) => {
      state.orderData = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // user cart data
      .addCase(getUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log("pending");
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        console.log("fulfilled use Cart");
      })
      .addCase(getUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.log("rejected");
      })
      // user info
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log("pending");
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.info = action.payload;
        console.log("fulfilled use Cart");
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.log("rejected");
      })
      // checkout cart
      .addCase(checkoutItem.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log("pending");
      })
      .addCase(checkoutItem.fulfilled, (state, action) => {
        state.loading = false;
        state.checkout = action.payload;
        console.log("fulfilled use Cart");
      })
      .addCase(checkoutItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
        console.log("rejected");
      })
      // order Data
      .addCase(getOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log("pending");
      })
      .addCase(getOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orderData = action.payload;
        console.log("fulfilled use Cart");
      })
      .addCase(getOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
        console.log("rejected");
      })
      // received item
      .addCase(receivedItem.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log("pending");
      })
      .addCase(receivedItem.fulfilled, (state, action) => {
        state.loading = false;
        console.log("fulfilled use Cart");
      })
      .addCase(receivedItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
        console.log("rejected");
      })
      // received item
      .addCase(getReceivedItem.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log("pending");
      })
      .addCase(getReceivedItem.fulfilled, (state, action) => {
        state.loading = false;
        state.receivedData = action.payload;
        console.log("fulfilled use Cart");
      })
      .addCase(getReceivedItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
        console.log("rejected");
      });
  },
});
export const { resetData, cleanCart, cleanOrdered } = userData.actions;
export default userData.reducer;
