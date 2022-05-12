import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Sidebar, Loader } from "components";
import { ProfileDetails, getAllUsers } from "features/user";
import { getPosts, PostCard } from "features/post";
import { useEffect } from "react";

export const UserProfile = () => {
  const { username } = useParams();
  const navigate = useNavigate();

  const { posts, isLoading } = useSelector((state) => state.post);
  const { users } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const currentUser = users?.find((user) => user.username === username);
  const currentUserPosts = posts?.filter((post) => post.username === username);

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-[13rem_3fr_1fr] w-[80%] m-auto">
      <Sidebar />

      <div className="border-x border-darkGrey">
        <h1 className="flex items-center px-4 py-2 sticky top-0 bg-[#001527d8] backdrop-blur-sm z-10 border-b border-darkGrey">
          <i
            className="fa-solid fa-arrow-left mr-4 cursor-pointer"
            onClick={() => navigate(-1)}
          ></i>
          <span>
            <p className="font-bold tracking-wide">{currentUser?.fullName}</p>
            <p className="text-sm text-lightGrey">
              {currentUserPosts?.length} posts
            </p>
          </span>
        </h1>

        {currentUser ? <ProfileDetails currentUser={currentUser} /> : null}

        {isLoading ? (
          <Loader />
        ) : currentUserPosts?.length ? (
          currentUserPosts?.map((post) => (
            <PostCard post={post} key={post._id} />
          ))
        ) : (
          <p className="p-4 text-center">No posts to show.</p>
        )}
      </div>
    </div>
  );
};
