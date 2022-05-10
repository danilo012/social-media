import { postSlice } from "./postSlice";

export { NewPost } from "./components/NewPost";
export { PostCard } from "./components/PostCard";
export { PostOptionsModal } from "./components/PostOptionsModal";
export { SinglePost } from "./components/SinglePost";

export {
  getPosts,
  createPost,
  deletePost,
  editPost,
  likePost,
  dislikePost,
} from "./postSlice";
export default postSlice.reducer;
