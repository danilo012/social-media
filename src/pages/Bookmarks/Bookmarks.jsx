import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Loader, Sidebar } from "components";
import { PostCard } from "features/post";
import { getBookmarks } from "features/user";

export const Bookmarks = () => {
  const { token } = useSelector((state) => state.auth);
  const { bookmarks, isLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookmarks(token));
  }, [dispatch, token]);

  return (
    <div className="grid grid-cols-[13rem_3fr_1fr] w-[80%] m-auto">
      <Sidebar />

      <div className="border-x border-darkGrey">
        <h1 className="text-bold p-4 sticky top-0 bg-[#001527d8] backdrop-blur-sm z-10 border-b border-darkGrey">
          Bookmarks
        </h1>

        <div>
          {isLoading ? (
            <Loader />
          ) : bookmarks.length ? (
            [...bookmarks]
              .reverse()
              .map((bookmark) => (
                <PostCard post={bookmark} key={bookmark._id} />
              ))
          ) : (
            <div className="p-4 text-center">No bookmarks</div>
          )}
        </div>
      </div>
    </div>
  );
};
