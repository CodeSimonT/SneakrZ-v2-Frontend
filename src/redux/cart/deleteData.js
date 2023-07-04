import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api.js";

export const deleteUserData = createAsyncThunk(
  "user/deleteItem",
  async ({ token, id, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.deleteData(token, id);
      location.reload();
      //   navigate("/AddToCart");
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const DeleteDataData = createSlice({
  name: "deletedata",
  initialState: {
    loading: false,
    error: null,
    selectedItem: null,
    items: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log("pending");
      })
      .addCase(deleteUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        console.log("fulfilled");
      })
      .addCase(deleteUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.log("rejected");
      });
  },
});

export default DeleteDataData.reducer;
