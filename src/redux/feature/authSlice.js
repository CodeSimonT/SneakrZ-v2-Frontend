import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api.js";

export const register = createAsyncThunk(
  "auth/register",
  async ({ formData, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.register(formData);
      navigate("/AddToCart");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const login = createAsyncThunk(
  "auth/login",
  async ({ formData, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.login(formData);
      navigate("/AddToCart");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const addCart = createAsyncThunk(
  "auth/addToCart",
  async ({ formData, token, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.addToCart(formData, token);
      navigate("/AddToCart");
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteItem = createAsyncThunk(
  "auth/deleteItem",
  async ({ id, token }, { rejectWithValue }) => {
    try {
      const response = await api.deleteData(token, id);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);
export const quantityN = createAsyncThunk(
  "auth/quantityN",
  async ({ token, id, item }, { rejectWithValue }) => {
    try {
      const response = await api.quantity(token, id, item);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const shoeSize = createAsyncThunk(
  "auth/shoeSize",
  async ({ token, id, item }, { rejectWithValue }) => {
    try {
      const response = await api.shoeSize(token, id, item);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: "",
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        console.log("pending");
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        localStorage.setItem("user", JSON.stringify({ ...action.payload }));
        state.user = action.payload;
        console.log("register complete");
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.log("rejected");
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
        console.log("pending");
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        localStorage.setItem("auth", JSON.stringify({ ...action.payload }));
        state.user = action.payload;
        console.log("register complete");
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      // add to cart
      .addCase(addCart.pending, (state) => {
        state.loading = true;
        console.log("pending");
      })
      .addCase(addCart.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        console.log("register complete");
      })
      .addCase(addCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
        console.log("rejected");
      })
      // delete Item
      .addCase(deleteItem.pending, (state) => {
        state.loading = true;
        console.log("pending");
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        console.log("Item deleted");
      })
      .addCase(deleteItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
        console.log("rejected");
      })
      // quantity Item
      .addCase(quantityN.pending, (state) => {
        state.loading = true;
        console.log("pending");
      })
      .addCase(quantityN.fulfilled, (state, action) => {
        state.loading = false;
        console.log("change");
      })
      .addCase(quantityN.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
        console.log("rejected");
      })
      // shoesize Item
      .addCase(shoeSize.pending, (state) => {
        state.loading = true;
        console.log("pending");
      })
      .addCase(shoeSize.fulfilled, (state, action) => {
        state.loading = false;
        console.log("change");
      })
      .addCase(shoeSize.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
        console.log("rejected");
      });
  },
});
export default authSlice.reducer;
