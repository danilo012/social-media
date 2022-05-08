import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loginHandler = createAsyncThunk(
  "auth/loginHandler",

  async (arg, { rejectWithValue }) => {
    const { login, setLogin } = arg;

    try {
      const { data, status } = await axios.post("/api/auth/login", login.input);

      if (status === 200) {
        localStorage.setItem("SM_token", data.encodedToken);
        localStorage.setItem("SM_user", JSON.stringify(data.foundUser));

        return data;
      }
    } catch (err) {
      setLogin({ ...login, error: err.response.statusText });
      return rejectWithValue([], false);
    }
  }
);

export const signUpHandler = createAsyncThunk(
  "auth/signUpHandler",

  async (arg, { rejectWithValue }) => {
    const { signup, setSignup } = arg;

    try {
      const { data, status } = await axios.post(
        "/api/auth/signup",
        signup.input
      );

      if (status === 201) {
        localStorage.setItem("SM_token", data.encodedToken);
        localStorage.setItem("SM_user", JSON.stringify(data.createdUser));

        return data;
      }
    } catch (err) {
      setSignup({ ...signup, error: err.response.statusText });
      return rejectWithValue([], false);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",

  initialState: {
    token: localStorage.getItem("SM_token") || null,
    isLoading: false,
  },

  reducers: {
    logoutHandler: (state) => {
      state.token = null;
      localStorage.removeItem("SM_token");
      localStorage.removeItem("SM_user");
    },
  },

  extraReducers: {
    // login
    [loginHandler.pending]: (state) => {
      state.isLoading = true;
    },
    [loginHandler.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.token = payload.encodedToken;
    },
    [loginHandler.rejected]: (state, { payload }) => {
      state.isLoading = payload;
    },

    // signup
    [signUpHandler.pending]: (state) => {
      state.isLoading = true;
    },
    [signUpHandler.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.token = payload.encodedToken;
    },
    [signUpHandler.rejected]: (state, { payload }) => {
      state.loading = payload;
    },
  },
});

export const { logoutHandler } = authSlice.actions;
export default authSlice.reducer;
