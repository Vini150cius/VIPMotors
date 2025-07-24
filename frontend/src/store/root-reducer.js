import { combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "./User/slice";

export const rootReducer = combineReducers({
  userReducer: userSlice.reducer,
});