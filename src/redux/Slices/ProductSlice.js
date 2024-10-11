import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  product: [],
  detalis: {},
  search: [],
  category: [],
  addpro: [],
};

export const productSlice = createSlice({
  name: "PRODUCTSLICE",
  initialState,
  reducers: {
    getProduct(state, action) {
      // let addToProduct =[...state.payload,{getProduct}]
      state.product = action.payload;
    },
    productDetale(state, action) {
      state.detalis = state.product.find((el) => el.id === action.payload);
    },
    sortProduct(state, action) {
      if (action.payload === "5") {
        state.product = state.product.sort(
          (a, b) => b.rating.rate - a.rating.rate
        );
      }
      if (action.payload === "1") {
        state.product = state.product.sort(
          (a, b) => a.rating.rate - b.rating.rate
        );
      }
    },
    searchProduct(state, action) {
      state.search = state.product.filter((el) => el.title === action.payload);
    },
    categoryPro(state, action) {
      let filterCategory = state.product.filter(
        (el) => el.category === action.payload
      );
      state.category = filterCategory;
    },
    addProduct(state, action) {
      state.addpro = [...state.addpro, action.payload];
    },
  },
});

export const {
  getProduct,
  productDetale,
  sortProduct,
  searchProduct,
  categoryPro,
  addProduct
} = productSlice.actions;
export default productSlice.reducer;
