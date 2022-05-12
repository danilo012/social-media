import { userSlice } from "./userSlice";

export {
  getAllUsers,
  getBookmarks,
  addBookmark,
  removeBookmark,
  followUser,
  unfollowUser,
} from "./userSlice";

export { ProfileDetails } from "./components/ProfileDetails";

export default userSlice.reducer;
