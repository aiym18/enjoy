import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  user: JSON.parse(localStorage.getItem("admin")) || {},

};

export const AdminSlice = createSlice({
  name: "USER_SLICE",
  initialState,
  reducers: {
    addUser(state, action) {
      state.user = action.payload;
      localStorage.setItem("admin", JSON.stringify(action.payload));
    },
    logOut(state,action){
      state.user = {}
      localStorage.setItem("admin", JSON.stringify({}));
    },
  },
});

export const { addUser,logOut } = AdminSlice.actions;
export default AdminSlice.reducer;
