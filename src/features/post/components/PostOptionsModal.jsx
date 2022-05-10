import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { deletePost, NewPost } from "features/post";
import { followUser, unfollowUser } from "features/user";

export const PostOptionsModal = ({ post, setShowOptions }) => {
  const { _id, username } = post;
  const { token, user } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [showNewPostModal, setShowNewPostModal] = useState(false);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const userToFollow = users.find((dbUser) => dbUser.username === username);

  const userAlreadyFollowing = userToFollow.followers.find(
    (follower) => follower.id === user.id
  );

  return (
    <div className="bg-dark absolute right-1.5 w-max rounded shadow-dark shadow-lg">
      {username === user.username ? (
        <>
          <button
            className="py-2 px-4 cursor-pointer hover:bg-[#001e396b]"
            onClick={(e) => {
              e.stopPropagation();
              setShowNewPostModal(true);
            }}
          >
            <i className="fa-solid fa-pen-to-square mr-2"></i>Edit
          </button>
          <button
            className="py-2 px-4 cursor-pointer text-red hover:bg-[#001e396b]"
            onClick={(e) => {
              e.stopPropagation();
              if (pathname !== "/") navigate("/");
              dispatch(deletePost({ token, _id }));
            }}
          >
            <i className="fa-solid fa-trash mr-2"></i>Delete
          </button>
        </>
      ) : (
        <button
          className="py-2 px-4 cursor-pointer hover:bg-[#001e396b]"
          onClick={(e) => {
            e.stopPropagation();
            userAlreadyFollowing
              ? dispatch(
                  unfollowUser({ token, followUserId: userToFollow._id })
                )
              : dispatch(followUser({ token, followUserId: userToFollow._id }));
          }}
        >
          <i
            className={`mr-2 fa-solid fa-user-${
              userAlreadyFollowing ? "xmark" : "plus"
            } `}
          ></i>
          {userAlreadyFollowing ? "Unfollow" : "Follow"}
        </button>
      )}

      {showNewPostModal ? (
        <div
          className="bg-[#00000080] top-0 left-0 fixed w-full h-full z-30 flex justify-center items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <NewPost post={post} setShowOptions={setShowOptions} />
        </div>
      ) : null}
    </div>
  );
};
