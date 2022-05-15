import { configureStore } from "@reduxjs/toolkit";
import authReducer from "features/auth";
import postSlice from "features/post";
import userSlice from "features/user";

export default configureStore({
  reducer: {
    auth: authReducer,
    post: postSlice,
    user: userSlice,
  },
});
