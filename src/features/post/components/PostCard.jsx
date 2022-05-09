import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAvatar } from "components";
import { PostOptionsModal } from "features/post";

export const PostCard = ({ post }) => {
  const { username, fullName, content, id } = post;
  const navigate = useNavigate();

  const [showOptions, setShowOptions] = useState(false);

  return (
    <div
      className="grid grid-cols-[2rem_1fr] gap-2 bg-darkSecondary text-sm border-b border-darkGrey px-4 py-3 cursor-pointer"
      onClick={() => navigate(`/post/${id}`)}
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
          <i className="fa-regular fa-thumbs-up p-2 cursor-pointer hover:bg-dark hover:rounded-full"></i>
          <i className="fa-regular fa-thumbs-down p-2 cursor-pointer hover:bg-dark hover:rounded-full"></i>
          <i className="fa-regular fa-message p-2 cursor-pointer hover:bg-dark hover:rounded-full"></i>
          <i className="fa-regular fa-bookmark p-2 cursor-pointer hover:bg-dark hover:rounded-full"></i>
        </div>
      </div>
    </div>
  );
};
