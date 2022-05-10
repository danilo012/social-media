import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UserAvatar } from "components";
import { PostOptionsModal, likePost, dislikePost } from "features/post";
import { addBookmark, removeBookmark } from "features/user";
import { useOnClickOutside } from "./../../../hooks/useOnClickOutside";

export const PostCard = ({ post }) => {
  const { user, token } = useSelector((state) => state.auth);
  const { bookmarks } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const { _id, username, fullName, content, id, likes } = post;
  const navigate = useNavigate();

  const [showOptions, setShowOptions] = useState(false);
  const postRef = useRef();

  const likedByLoggedUser = post.likes.likedBy.find(
    (likeUser) => likeUser.username === user.username
  );

  const postInBookmarks = bookmarks.find((bookmark) => bookmark._id === _id);

  useOnClickOutside(postRef, setShowOptions);

  return (
    <div
      className="grid grid-cols-[2rem_1fr] gap-2 bg-darkSecondary text-sm border-b border-darkGrey px-4 py-3 cursor-pointer"
      onClick={() => navigate(`/post/${id}`)}
      ref={postRef}
    >
      <UserAvatar name={fullName} />

      <div className="flex flex-col gap-1">
        <div className="flex justify-between ">
          <div className="flex items-center gap-1">
            <span className="font-bold tracking-wide">{fullName}</span>
            <span className="text-lightGrey">@{username}</span>
          </div>

          <div className="relative">
            <i
              className="fa-solid fa-ellipsis p-2 cursor-pointer hover:bg-dark hover:rounded-full"
              onClick={(e) => {
                setShowOptions((prev) => !prev);
                e.stopPropagation();
              }}
            ></i>

            {showOptions ? (
              <PostOptionsModal post={post} setShowOptions={setShowOptions} />
            ) : null}
          </div>
        </div>

        <div>{content}</div>

        <div className="flex gap-6 -ml-2 mt-1">
          <div>
            <button
              className={`cursor-pointer hover:bg-dark hover:rounded-full `}
              onClick={(e) => {
                e.stopPropagation();
                likedByLoggedUser
                  ? dispatch(dislikePost({ token, _id }))
                  : dispatch(likePost({ token, _id }));
              }}
            >
              <i
                className={` fa-heart p-2 ${
                  likedByLoggedUser ? "fa-solid text-red" : "fa-regular"
                }`}
              ></i>
            </button>
            {likes.likeCount > 0 && (
              <span className="ml-1">{likes.likeCount}</span>
            )}
          </div>

          <button className="cursor-pointer hover:bg-dark hover:rounded-full">
            <i className="fa-regular fa-message p-2"></i>
          </button>

          <button
            className="cursor-pointer hover:bg-dark hover:rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              postInBookmarks
                ? dispatch(removeBookmark({ token, _id }))
                : dispatch(addBookmark({ token, _id }));
            }}
          >
            <i
              className={`fa-bookmark p-2 ${
                postInBookmarks ? "fa-solid text-primary" : "fa-regular"
              }`}
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
};
