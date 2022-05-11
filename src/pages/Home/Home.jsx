import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader, Sidebar } from "components";
import { logoutHandler } from "features/auth";
import { NewPost, getPosts, PostCard } from "features/post";
import { getAllUsers } from "features/user";

export const Home = () => {
  const dispatch = useDispatch();
  let { posts, isLoading } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-[13rem_2fr_1fr] w-[80%] m-auto">
      <Sidebar />

      <div className="border-x border-darkGrey">
        <h1 className="text-bold p-4 sticky top-0 bg-[#001527d8] backdrop-blur-sm z-10">
          Home
        </h1>

        <div>
          <NewPost />

          <div>
            {isLoading ? (
              <Loader />
            ) : posts.length ? (
              [...posts]
                .reverse()
                .map((post) => <PostCard post={post} key={post._id} />)
            ) : (
              <div className="p-4 text-center">No posts</div>
            )}
          </div>
        </div>

        <button
          className="bg-primary rounded-full py-1 px-4 w-max"
          onClick={() => dispatch(logoutHandler())}
        >
          Logout
        </button>
      </div>
    </div>
  );
};
