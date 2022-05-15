import { postSlice } from "./postSlice";

export { NewPost } from "./components/NewPost";
export { PostCard } from "./components/PostCard";
export { PostOptionsModal } from "./components/PostOptionsModal";
export { SinglePost } from "./components/SinglePost";
export { CommentModal } from "./components/CommentModal";
export { CommentCard } from "./components/CommentCard";
export { CommentOptionsModal } from "./components/CommentOptionsModal";

export {
  getPosts,
  getSinglePost,
  resetSinglePost,
  setActiveSort,
  createPost,
  deletePost,
  editPost,
  likePost,
  dislikePost,
  addComment,
  editComment,
  deleteComment,
} from "./postSlice";
export default postSlice.reducer;
