import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  basket: JSON.parse(localStorage.getItem("basket")) || [],
};

export const BasketProduct = createSlice({
  name: "BASKETPRODUCT",
  initialState,
  reducers: {
    productBasket(state, action) {
      let findProduct = state.basket.find((el) => el.id === action.payload.id);
      if (findProduct) {
        let changeProduct = state.basket.map((el) =>
          el.id === findProduct.id ? { ...el, quantity: el.quantity + 1 } : el
        );
        state.basket = changeProduct;
        localStorage.setItem("basket", JSON.stringify(changeProduct));
      } else {
        let addProduct = [...state.basket, { ...action.payload, quantity: 1 }];
        state.basket = addProduct;
        localStorage.setItem("basket", JSON.stringify(addProduct));
      }
    },
    deletePoduct(state, action) {
      const res = state.basket.filter((el) => el.id !== action.payload);
      state.basket = res;
      localStorage.setItem("basket", JSON.stringify(res));
    },
    decrementQuantity(state, action) {
      let changeQuan = state.basket.map((el) =>
        el.id === action.payload.id
          ? { ...el, quantity: el.quantity > 1 ? el.quantity - 1 : 1 }
          : el
      );
      state.basket = changeQuan;
      localStorage.setItem("basket", JSON.stringify(changeQuan));
    },
    removeAll(state,action){
      state.basket= []
    }
  },
});

export const { productBasket, deletePoduct, decrementQuantity, removeAll } =
  BasketProduct.actions;
export default BasketProduct.reducer;
