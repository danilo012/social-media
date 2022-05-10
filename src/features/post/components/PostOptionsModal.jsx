import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { deletePost, NewPost } from "features/post";

export const PostOptionsModal = ({ post, setShowOptions }) => {
  const { _id, username } = post;
  const [showNewPostModal, setShowNewPostModal] = useState(false);

  const { token, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="bg-dark absolute right-1.5 w-max rounded shadow-dark shadow-lg">
      {username === user.username ? (
        <>
          <p
            className="py-2 px-4 cursor-pointer hover:bg-[#001e396b]"
            onClick={(e) => {
              e.stopPropagation();
              setShowNewPostModal(true);
            }}
          >
            <i className="fa-solid fa-pen-to-square mr-2"></i>Edit
          </p>
          <p
            className="py-2 px-4 cursor-pointer text-red hover:bg-[#001e396b]"
            onClick={(e) => {
              e.stopPropagation();
              if (pathname !== "/") navigate("/");
              dispatch(deletePost({ token, _id }));
            }}
          >
            <i className="fa-solid fa-trash mr-2"></i>Delete
          </p>
        </>
      ) : (
        <p className="py-2 px-4 cursor-pointer hover:bg-[#001e396b]">
          <i className="fa-solid fa-user-plus mr-2"></i>Follow
        </p>
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
