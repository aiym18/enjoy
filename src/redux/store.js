import { configureStore } from "@reduxjs/toolkit";
import {AdminSlice} from "./Slices/AdminSlice";
import { productSlice } from "./Slices/ProductSlice";
import { BasketProduct } from "./Slices/BasketSlice";

export const store = configureStore({
  reducer: {
    userSl: AdminSlice.reducer,
    productSl:productSlice.reducer,
    productBs:BasketProduct.reducer,
  },
});
