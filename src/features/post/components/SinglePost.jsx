import { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Loader, Sidebar, SuggestedUsers, UserAvatar } from "components";
import { PostOptionsModal, likePost, dislikePost } from "features/post";
import { addBookmark, removeBookmark } from "features/user";
import { useOnClickOutside } from "hooks/useOnClickOutside";
import { likedByLoggedUser, postInBookmarks } from "utils";

export const SinglePost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const { user, token } = useSelector((state) => state.auth);
  const { posts, isLoading } = useSelector((state) => state.post);
  const { users, bookmarks } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [showOptions, setShowOptions] = useState(false);
  const postRef = useRef();

  const currentPost = posts.find((post) => post.id === postId);

  const currentUser = users?.find(
    (dbUser) => dbUser.username === currentPost.username
  );

  useOnClickOutside(postRef, setShowOptions);

  return (
    <div className="grid grid-cols-[13rem_3fr_1fr] w-[80%] m-auto">
      <Sidebar />

      <div className="border-x border-darkGrey">
        <h1 className="text-bold p-4 sticky top-0 bg-[#001527d8] backdrop-blur-sm z-10">
          <i
            className="fa-solid fa-arrow-left mr-4 cursor-pointer"
            onClick={() => navigate(-1)}
          ></i>
          Post
        </h1>

        <div>
          {isLoading ? (
            <Loader />
          ) : posts.length ? (
            <div
              className="flex flex-col gap-2 bg-darkSecondary text-sm border-b border-darkGrey px-4 py-3 break-all"
              ref={postRef}
            >
              <div className="grid grid-cols-[2rem_1fr] gap-2 ">
                <div
                  className="cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/profile/${currentPost?.username}`);
                  }}
                >
                  <UserAvatar user={currentUser} />
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <div
                      className="flex flex-col cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/profile/${currentPost?.username}`);
                      }}
                    >
                      <span className="font-bold tracking-wide">
                        {currentPost?.fullName}
                      </span>
                      <span className="text-lightGrey -mt-1">
                        @{currentPost?.username}
                      </span>
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
                        <PostOptionsModal
                          post={currentPost}
                          setShowOptions={setShowOptions}
                        />
                      ) : null}
                    </div>
                  </div>

                  <div>{currentPost?.content}</div>
                </div>
              </div>

              <div className="flex justify-evenly gap-6  pt-2 mt-2 border-t border-darkGrey">
                <div>
                  <button
                    className={`cursor-pointer hover:bg-dark hover:rounded-full `}
                    onClick={() => {
                      likedByLoggedUser(currentPost, user)
                        ? dispatch(dislikePost({ token, _id: currentPost._id }))
                        : dispatch(likePost({ token, _id: currentPost._id }));
                    }}
                  >
                    <i
                      className={`fa-heart p-2 ${
                        likedByLoggedUser(currentPost, user)
                          ? "fa-solid text-red"
                          : "fa-regular"
                      }`}
                    ></i>
                  </button>
                  {currentPost?.likes.likeCount > 0 && (
                    <span className="ml-1">{currentPost?.likes.likeCount}</span>
                  )}
                </div>

                <i className="fa-regular fa-message p-2 cursor-pointer hover:bg-dark hover:rounded-full"></i>

                <div>
                  <button
                    className="cursor-pointer hover:bg-dark hover:rounded-full"
                    onClick={() => {
                      postInBookmarks(bookmarks, currentPost?._id)
                        ? dispatch(
                            removeBookmark({ token, _id: currentPost?._id })
                          )
                        : dispatch(
                            addBookmark({ token, _id: currentPost?._id })
                          );
                    }}
                  >
                    <i
                      className={`fa-bookmark p-2 ${
                        postInBookmarks(bookmarks, currentPost?._id)
                          ? "fa-solid text-primary"
                          : "fa-regular"
                      }`}
                    ></i>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-[2rem_1fr] gap-2 pt-3 border-t border-darkGrey">
                <UserAvatar user={currentUser} />

                <input
                  type="text"
                  placeholder="Post your reply"
                  className="outline-none bg-inherit"
                />
              </div>
            </div>
          ) : (
            <p className="text-center p-2">Post not found.</p>
          )}
        </div>
      </div>

      <SuggestedUsers />
    </div>
  );
};
