import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api.js";

// adidas
// fetch getAllAddidasMen
export const getAllAddidasMen = createAsyncThunk(
  "data/getAllAddidasMen",
  async () => {
    try {
      const response = await api.getAllAddidasMen();
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
// fetch getAllAddidasMen
export const getSingleAddidasMen = createAsyncThunk(
  "data/getSingleAddidasMen",
  async ({ id, navigate }) => {
    try {
      const response = await api.getSingleAddidasMen(id);
      navigate("/GetSingleShoesMen");
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// newbalance
// fetch getAllNewbalanceMen
export const getAllNewbalanceMen = createAsyncThunk(
  "data/getAllNewbalanceMen",
  async () => {
    try {
      const response = await api.getAllNewbalanceMen();
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
// fetch getSingleNewbalanceMen
export const getSingleNewbalanceMen = createAsyncThunk(
  "data/getSingleNewbalanceMen",
  async ({ id, navigate }) => {
    try {
      const response = await api.getSingleNewbalanceMen(id);
      navigate("/GetSingleShoesMen");
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// nike
// fetch getAllNikeMen
export const getAllNikeMen = createAsyncThunk(
  "data/getAllNikeMen",
  async () => {
    try {
      const response = await api.getAllNikeMen();
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
// fetch getSingleNikeMen
export const getSingleNikeMen = createAsyncThunk(
  "data/getSingleNikeMen",
  async ({ id, navigate }) => {
    try {
      const response = await api.getSingleNikeMen(id);
      navigate("/GetSingleShoesMen");
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// underAmour
// fetch getAllUnderArmourMen
export const getAllUnderArmourMen = createAsyncThunk(
  "data/getAllUnderArmourMen",
  async () => {
    try {
      const response = await api.getAllUnderArmourMen();
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
// fetch getSingleUnderArmourMen
export const getSingleUnderArmourMen = createAsyncThunk(
  "data/getSingleUnderArmourMen",
  async ({ id, navigate }) => {
    try {
      const response = await api.getSingleUnderArmourMen(id);
      navigate("/GetSingleShoesMen");
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const menShoes = createSlice({
  name: "allShoesMen",
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
    //for getAllAddidasMen (adidas)
    builder
      .addCase(getAllAddidasMen.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log("pending");
      })

      .addCase(getAllAddidasMen.fulfilled, (state, action) => {
        state.loading = false;
        state.adidasItem = action.payload;
        console.log("fulfilled");
      })

      .addCase(getAllAddidasMen.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.log("rejected");
      })
      //for getSingleAddidasMen
      .addCase(getSingleAddidasMen.pending, (state) => {
        state.loadingS = true;
        state.error = null;
        console.log("pending");
      })

      .addCase(getSingleAddidasMen.fulfilled, (state, action) => {
        state.loadingS = false;
        state.singleItem = action.payload;
        console.log("fetch Single data");
      })

      .addCase(getSingleAddidasMen.rejected, (state, action) => {
        state.loadingS = false;
        state.error = action.error.message;
        console.log("rejected");
      })

      //for getAllNewbalanceMen (newbalance)
      .addCase(getAllNewbalanceMen.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log("pending");
      })
      .addCase(getAllNewbalanceMen.fulfilled, (state, action) => {
        state.loading = false;
        state.newBalanceItem = action.payload;
        console.log("fetch Single data");
      })
      .addCase(getAllNewbalanceMen.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.log("rejected");
      })
      //for getSingleNewbalanceMen
      .addCase(getSingleNewbalanceMen.pending, (state) => {
        state.loadingS = true;
        state.error = null;
        console.log("pending");
      })
      .addCase(getSingleNewbalanceMen.fulfilled, (state, action) => {
        state.loadingS = false;
        state.singleItem = action.payload;
        console.log("fetch Single data");
      })
      .addCase(getSingleNewbalanceMen.rejected, (state, action) => {
        state.loadingS = false;
        state.error = action.error.message;
        console.log("rejected");
      })

      //for getAllNikeMen (nike)
      .addCase(getAllNikeMen.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log("pending");
      })
      .addCase(getAllNikeMen.fulfilled, (state, action) => {
        state.loading = false;
        state.nikeItem = action.payload;
        console.log("fetch Single data");
      })
      .addCase(getAllNikeMen.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.log("rejected");
      })
      //for getSingleNikeMen
      .addCase(getSingleNikeMen.pending, (state) => {
        state.loadingS = true;
        state.error = null;
        console.log("pending");
      })
      .addCase(getSingleNikeMen.fulfilled, (state, action) => {
        state.loadingS = false;
        state.singleItem = action.payload;
        console.log("fetch Single data");
      })
      .addCase(getSingleNikeMen.rejected, (state, action) => {
        state.loadingS = false;
        state.error = action.error.message;
        console.log("rejected");
      })

      //for getAllUnderArmourMen (underAmour)
      .addCase(getAllUnderArmourMen.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log("pending");
      })
      .addCase(getAllUnderArmourMen.fulfilled, (state, action) => {
        state.loading = false;
        state.underArmourItem = action.payload;
        console.log("fetch Single data");
      })
      .addCase(getAllUnderArmourMen.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.log("rejected");
      })
      //for getSingleUnderArmourMen
      .addCase(getSingleUnderArmourMen.pending, (state) => {
        state.loadingS = true;
        state.error = null;
        console.log("pending");
      })
      .addCase(getSingleUnderArmourMen.fulfilled, (state, action) => {
        state.loadingS = false;
        state.singleItem = action.payload;
        console.log("fetch Single data");
      })
      .addCase(getSingleUnderArmourMen.rejected, (state, action) => {
        state.loadingS = false;
        state.error = action.error.message;
        console.log("rejected");
      });
  },
});
export const { selectItem } = menShoes.actions;
export default menShoes.reducer;
