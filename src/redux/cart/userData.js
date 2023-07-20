import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api.js";

export const getUserData = createAsyncThunk(
  "user/data",
  async ({ token, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.readData(token);
      return response.data;
    } catch (error) {
      throw error;
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
  },
  extraReducers: (builder) => {
    builder
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
      });
  },
});
export default userData.reducer;
