import { configureStore } from "@reduxjs/toolkit";
import getAllShoes from "./cart/getAllShoes.js";
import menShoes from "./cart/menShoes.js";
import womenShoes from "./cart/womenShoes.js";
import authSlice from "./feature/authSlice.js";
import userData from "./cart/userData.js";
import DeleteDataData from "./cart/deleteData.js";
export const store = configureStore({
  reducer: {
    allShoes: getAllShoes,
    allShoesMen: menShoes,
    allShoesWomen: womenShoes,
    auth: authSlice,
    data: userData,
    deletedata: DeleteDataData,
  },
});
