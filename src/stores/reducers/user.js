import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userauth: false,
    userdata: "",
    userToken: "",
  },
  reducers: {
    updateUserData: (state, action) => {
      state.userdata = action.payload;
    },
    updateUserAuth: (state, action) => {
      state.userauth = action.payload;
    },
    updateUserToken: (state, action) => {
      state.userToken = action.payload;
    },
  },
});

export const userData = (state) => state.user.userdata;
export const userAuth = (state) => state.user.userauth;
export const userToken = (state) => state.user.userToken;
export const { updateUserData, updateUserAuth, updateUserToken } =
  userSlice.actions;
export const userReducer = userSlice.reducer;
