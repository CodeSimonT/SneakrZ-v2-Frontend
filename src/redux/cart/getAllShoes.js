import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api.js";

// fetch all shoes
export const fetchAllShoes = createAsyncThunk("data/getAllShoes", async () => {
  try {
    const response = await api.getAllShoes();
    return response.data;
  } catch (error) {
    throw error;
  }
});
// fetch single shoes
export const fetchSingleShoes = createAsyncThunk(
  "data/getSingleShoes",
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
  name: "allShoes",
  initialState: {
    loading: false,
    loadingS: false,
    error: null,
    selectedItem: null,
    items: [],
    singleItem: null,
  },
  reducers: {
    selectItem: (state, action) => {
      const itemId = action.payload;
      console.log(state.items);
      localStorage.removeItem("singleShoes");
      localStorage.setItem("singleShoes", JSON.stringify(itemId));
      const singleData = state.items.task.filter((item) => item._id === itemId);
      state.singleItem = singleData;
      console.log(state.singleItem);
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
        state.loadingS = true;
        state.error = null;
        console.log("pending");
      })

      .addCase(fetchSingleShoes.fulfilled, (state, action) => {
        state.loadingS = false;
        state.singleItem = action.payload;
        console.log("fetch Single data");
      })

      .addCase(fetchSingleShoes.rejected, (state, action) => {
        state.loadingS = false;
        state.error = action.error.message;
        console.log("rejected");
      });
  },
});
export const { selectItem } = getAllShoes.actions;
export default getAllShoes.reducer;
