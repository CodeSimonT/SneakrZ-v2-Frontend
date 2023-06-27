import { configureStore } from "@reduxjs/toolkit";
import getAllShoes from "./cart/getAllShoes.js";
export const store = configureStore({
  reducer: {
    data: getAllShoes,
  },
});
