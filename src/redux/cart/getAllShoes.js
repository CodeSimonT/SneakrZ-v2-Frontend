import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api.js";

// fetch all shoes
export const fetchAllShoes = createAsyncThunk("data/fetchAll", async () => {
  try {
    const response = await api.getAllShoes();
    return response.data;
  } catch (error) {
    throw error;
  }
});
// fetch single shoes
export const fetchSingleShoes = createAsyncThunk(
  "data/fetchSingle",
  async ({ id, navigate }) => {
    try {
      const response = await api.getSingleShoes(id);
      navigate("/SingleShoes");
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const getAllShoes = createSlice({
  name: "data",
  initialState: {
    loading: false,
    error: null,
    selectedItem: null,
    items: [],
    singleItem: [],
  },
  reducers: {
    selectItem: (state, action) => {
      const itemId = action.payload;
      console.log(state.items);
      // state.selectedItem = state.items.find((item) => item._id === itemId);
    },
  },
  extraReducers: (builder) => {
    //for fetchAllShoes
    builder
      .addCase(fetchAllShoes.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log("pending");
      })

      .addCase(fetchAllShoes.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        console.log("fulfilled");
      })

      .addCase(fetchAllShoes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.log("rejected");
      })
      //for fetchSingleShoes
      .addCase(fetchSingleShoes.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log("pending");
      })

      .addCase(fetchSingleShoes.fulfilled, (state, action) => {
        state.loading = false;
        state.singleItem = action.payload;
        console.log("fetch Single data");
      })

      .addCase(fetchSingleShoes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.log("rejected");
      });
  },
});
export const { selectItem } = getAllShoes.actions;
export default getAllShoes.reducer;
