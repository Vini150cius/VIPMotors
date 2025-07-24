import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userType: null,
  token: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userIsAdmin: (state) => {
      state.userType = "admin";
    },
    userIsClient: (state) => {
      state.userType = "client";
    },
    tokenUser: (state, action) => {
      state.token = action.payload;
    },
    clearUser: (state) => {
      state.userType = null;
      state.token = null;
    }
  },
});

export const {
  userIsAdmin,
  userIsClient,
  tokenUser,
  clearUser
} = userSlice.actions;

