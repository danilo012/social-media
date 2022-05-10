import { userSlice } from "./userSlice";

export {
  getAllUsers,
  getBookmarks,
  addBookmark,
  removeBookmark,
  followUser,
  unfollowUser,
} from "./userSlice";

export default userSlice.reducer;
