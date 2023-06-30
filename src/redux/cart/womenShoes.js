import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api.js";

// adidas
// fetch getAllAddidasWomen
export const getAllAddidasWomen = createAsyncThunk(
  "data/getAllAddidasWomen",
  async () => {
    try {
      const response = await api.getAllAddidasWomen();
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
// fetch getSingleAddidasWomen
export const getSingleAddidasWomen = createAsyncThunk(
  "data/getSingleAddidasWomen",
  async ({ id, navigate }) => {
    try {
      const response = await api.getSingleAddidasWomen(id);
      navigate("/GetSingleShoesWomen");
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// newbalance
// fetch getAllNewbalanceWomen
export const getAllNewbalanceWomen = createAsyncThunk(
  "data/getAllNewbalanceWomen",
  async () => {
    try {
      const response = await api.getAllNewbalanceWomen();
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
// fetch getSingleNewbalanceWomen
export const getSingleNewbalanceWomen = createAsyncThunk(
  "data/getSingleNewbalanceWomen",
  async ({ id, navigate }) => {
    try {
      const response = await api.getSingleNewbalanceWomen(id);
      navigate("/GetSingleShoesWomen");
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// nike
// fetch getAllNikeWomen
export const getAllNikeWomen = createAsyncThunk(
  "data/getAllNikeWomen",
  async () => {
    try {
      const response = await api.getAllNikeWomen();
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
// fetch getSingleNikeWomen
export const getSingleNikeWomen = createAsyncThunk(
  "data/getSingleNikeWomen",
  async ({ id, navigate }) => {
    try {
      const response = await api.getSingleNikeWomen(id);
      navigate("/GetSingleShoesWomen");
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// underAmour
// fetch getAllUnderArmourWomen
export const getAllUnderArmourWomen = createAsyncThunk(
  "data/getAllUnderArmourWomen",
  async () => {
    try {
      const response = await api.getAllUnderArmourWomen();
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
// fetch getSingleUnderArmourWomen
export const getSingleUnderArmourWomen = createAsyncThunk(
  "data/getSingleUnderArmourWomen",
  async ({ id, navigate }) => {
    try {
      const response = await api.getSingleUnderArmourWomen(id);
      navigate("/GetSingleShoesWomen");
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const womenShoes = createSlice({
  name: "allShoesWomen",
  initialState: {
    loading: false,
    loadingS: false,
    error: null,
    selectedItem: null,
    adidasItem: [],
    newBalanceItem: [],
    nikeItem: [],
    underArmourItem: [],
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
    //for getAllAddidasWomen (adidas)
    builder
      .addCase(getAllAddidasWomen.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log("pending");
      })

      .addCase(getAllAddidasWomen.fulfilled, (state, action) => {
        state.loading = false;
        state.adidasItem = action.payload;
        console.log("fulfilled");
      })

      .addCase(getAllAddidasWomen.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.log("rejected");
      })
      //for getSingleAddidasWomen
      .addCase(getSingleAddidasWomen.pending, (state) => {
        state.loadingS = true;
        state.error = null;
        console.log("pending");
      })

      .addCase(getSingleAddidasWomen.fulfilled, (state, action) => {
        state.loadingS = false;
        state.singleItem = action.payload;
        console.log("fetch Single data");
      })

      .addCase(getSingleAddidasWomen.rejected, (state, action) => {
        state.loadingS = false;
        state.error = action.error.message;
        console.log("rejected");
      })

      //for getAllNewbalanceWomen (newbalance)
      .addCase(getAllNewbalanceWomen.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log("pending");
      })
      .addCase(getAllNewbalanceWomen.fulfilled, (state, action) => {
        state.loading = false;
        state.newBalanceItem = action.payload;
        console.log("fetch Single data");
      })
      .addCase(getAllNewbalanceWomen.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.log("rejected");
      })
      //for getSingleNewbalanceWomen
      .addCase(getSingleNewbalanceWomen.pending, (state) => {
        state.loadingS = true;
        state.error = null;
        console.log("pending");
      })
      .addCase(getSingleNewbalanceWomen.fulfilled, (state, action) => {
        state.loadingS = false;
        state.singleItem = action.payload;
        console.log("fetch Single data");
      })
      .addCase(getSingleNewbalanceWomen.rejected, (state, action) => {
        state.loadingS = false;
        state.error = action.error.message;
        console.log("rejected");
      })

      //for getAllNikeWomen (nike)
      .addCase(getAllNikeWomen.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log("pending");
      })
      .addCase(getAllNikeWomen.fulfilled, (state, action) => {
        state.loading = false;
        state.nikeItem = action.payload;
        console.log("fetch Single data");
      })
      .addCase(getAllNikeWomen.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.log("rejected");
      })
      //for getSingleNikeWomen
      .addCase(getSingleNikeWomen.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log("pending");
      })
      .addCase(getSingleNikeWomen.fulfilled, (state, action) => {
        state.loadingS = false;
        state.singleItem = action.payload;
        console.log("fetch Single data");
      })
      .addCase(getSingleNikeWomen.rejected, (state, action) => {
        state.loadingS = false;
        state.error = action.error.message;
        console.log("rejected");
      })

      //for getAllUnderArmourWomen (underAmour)
      .addCase(getAllUnderArmourWomen.pending, (state) => {
        state.loadingS = true;
        state.error = null;
        console.log("pending");
      })
      .addCase(getAllUnderArmourWomen.fulfilled, (state, action) => {
        state.loading = false;
        state.underArmourItem = action.payload;
        console.log("fetch Single data");
      })
      .addCase(getAllUnderArmourWomen.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.log("rejected");
      })
      //for getSingleUnderArmourWomen
      .addCase(getSingleUnderArmourWomen.pending, (state) => {
        state.loadingS = true;
        state.error = null;
        console.log("pending");
      })
      .addCase(getSingleUnderArmourWomen.fulfilled, (state, action) => {
        state.loadingS = false;
        state.singleItem = action.payload;
        console.log("fetch Single data");
      })
      .addCase(getSingleUnderArmourWomen.rejected, (state, action) => {
        state.loadingS = false;
        state.error = action.error.message;
        console.log("rejected");
      });
  },
});
export const { selectItem } = womenShoes.actions;
export default womenShoes.reducer;
