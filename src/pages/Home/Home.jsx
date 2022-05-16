import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SortBar,
  Loader,
  Sidebar,
  SuggestedUsers,
  SearchBar,
} from "components";
import { NewPost, getPosts, PostCard } from "features/post";
import { getAllUsers } from "features/user";
import { sortByDate } from "utils";

export const Home = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.user);
  const { posts, isLoading, activeSort } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getAllUsers());
  }, [dispatch]);

  const loggedInUser = users.find(
    (dbUser) => dbUser.username === user.username
  );

  const followingUsers = loggedInUser?.following;

  const postOfFollowingUsers = posts?.filter((post) =>
    followingUsers?.some(
      (followingUser) =>
        followingUser.username === post.username ||
        user.username === post.username
    )
  );

  const sortedPosts = sortByDate(postOfFollowingUsers, activeSort);

  return (
    <div className="grid sm:grid-cols-[5rem_1fr] lg:grid-cols-[15rem_1fr] xl:grid-cols-[13rem_1fr_18rem] w-[100%] lg:w-[80%] mb-16 sm:m-auto">
      <Sidebar />

      <div className="sm:border-x border-darkGrey">
        <h1 className="text-bold p-4 sticky top-0 bg-[#001527d8] backdrop-blur-sm z-10 border-b border-darkGrey flex justify-between">
          Home
          <div className="block xl:hidden">
            <SearchBar />
          </div>
        </h1>

        <div>
          <NewPost />

          <SortBar />

          <div>
            {isLoading ? (
              <Loader />
            ) : sortedPosts?.length ? (
              [...sortedPosts]
                .reverse()
                .map((post) => <PostCard post={post} key={post._id} />)
            ) : (
              <div className="p-4 text-center">No posts</div>
            )}
          </div>
        </div>
      </div>

      <div className="hidden xl:block">
        <SearchBar />
        <SuggestedUsers />
      </div>
    </div>
  );
};
