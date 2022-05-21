import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Loader, Sidebar, SuggestedUsers, SearchBar } from "components";
import { PostCard } from "features/post";
import { getBookmarks, getAllUsers } from "features/user";
import { sortByDate } from "utils";

export const Bookmarks = () => {
  const { token } = useSelector((state) => state.auth);
  const { bookmarks, isLoading } = useSelector((state) => state.user);
  const { posts } = useSelector((state) => state.post);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookmarks(token));
    dispatch(getAllUsers());
  }, [dispatch, token]);

  const bookmarkedPosts = posts.filter((dbPost) =>
    bookmarks.find((bookmark) => bookmark === dbPost._id)
  );

  const latestBookmarks = sortByDate(bookmarkedPosts, "Latest");

  return (
    <div className="grid sm:grid-cols-[5rem_1fr] lg:grid-cols-[15rem_1fr] xl:grid-cols-[13rem_1fr_18rem] w-[100%] lg:w-[80%] mb-16 sm:m-auto">
      <Sidebar />

      <div className="sm:border-x border-darkGrey">
        <h1 className="text-bold p-4 sticky top-0 bg-[#001527d8] backdrop-blur-sm z-10 border-b border-darkGrey flex items-center justify-between">
          Bookmarks
          <div className="block xl:hidden">
            <SearchBar />
          </div>
        </h1>

        <div>
          {isLoading ? (
            <Loader />
          ) : latestBookmarks.length ? (
            [...latestBookmarks]
              .reverse()
              .map((bookmarkedPost) => (
                <PostCard post={bookmarkedPost} key={bookmarkedPost._id} />
              ))
          ) : (
            <div className="p-4 text-center">No bookmarks</div>
          )}
        </div>
      </div>

      <div className="hidden xl:block">
        <SearchBar />
        <SuggestedUsers />
      </div>
    </div>
  );
};
