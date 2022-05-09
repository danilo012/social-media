import { configureStore } from "@reduxjs/toolkit";
import authReducer from "features/auth";
import postSlice from "features/post";

export default configureStore({
  reducer: { auth: authReducer, post: postSlice },
});
