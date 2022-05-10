import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getBookmarkService,
  addBookmarkService,
  removeBookmarkService,
} from "services";

export const getBookmarks = createAsyncThunk(
  "user/getBookmark",
  async (token, { rejectWithValue }) => {
    try {
      const { data, status } = await getBookmarkService(token);

      if (status === 200) {
        return data.bookmarks;
      }
    } catch {
      return rejectWithValue([], "Error occured. Try again later.");
    }
  }
);

export const addBookmark = createAsyncThunk(
  "user/addBookmark",
  async (arg, { rejectWithValue }) => {
    try {
      const { data, status } = await addBookmarkService(arg);

      if (status === 200) {
        return data.bookmarks;
      }
    } catch {
      return rejectWithValue([], "Error occured. Try again later.");
    }
  }
);

export const removeBookmark = createAsyncThunk(
  "user/removeBookmark",
  async (arg, { rejectWithValue }) => {
    try {
      const { data, status } = await removeBookmarkService(arg);

      if (status === 200) {
        return data.bookmarks;
      }
    } catch {
      return rejectWithValue([], "Error occured. Try again later.");
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: { bookmarks: [], isLoading: false, error: "" },
  reducers: {},

  extraReducers: {
    [getBookmarks.fulfilled]: (state, { payload }) => {
      state.bookmarks = payload;
    },

    [addBookmark.fulfilled]: (state, { payload }) => {
      state.bookmarks = payload;
    },

    [removeBookmark.fulfilled]: (state, { payload }) => {
      state.bookmarks = payload;
    },
  },
});

export default userSlice.reducer;
