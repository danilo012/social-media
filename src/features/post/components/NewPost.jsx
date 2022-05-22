import "../styles.css";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { UserAvatar } from "components";
import { createPost, setLoadingId } from "features/post";
import { focusInput, uploadImage } from "utils";

export const NewPost = () => {
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);

  const { token, user } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const newPostRef = useRef();

  const currentUser = users?.find(
    (dbUser) => dbUser.username === user.username
  );

  const submitPost = async (e) => {
    e.preventDefault();

    dispatch(setLoadingId(toast.loading("Adding post")));

    if (image) {
      const resp = await uploadImage(image);
      dispatch(
        createPost({
          input,
          image: resp.url,
          imageAlt: resp.original_filename,
          token,
          user,
        })
      );
    } else
      dispatch(createPost({ input, image: "", imageAlt: "", token, user }));

    setInput("");
    setImage(null);
    newPostRef.current.innerText = "";
  };

  return (
    <div
      className="grid grid-cols-[2rem_1fr] gap-2 items-start bg-darkSecondary text-sm  border-b border-darkGrey px-4 py-3 cursor-text"
      onClick={(e) => {
        e.stopPropagation();
        focusInput(newPostRef);
      }}
    >
      <UserAvatar user={currentUser} />

      <form className="flex flex-col gap-4" onSubmit={submitPost}>
        <div
          role="textbox"
          ref={newPostRef}
          contentEditable="true"
          placeholder="What's happening?"
          className="w-full break-all bg-inherit outline-none mt-1.5"
          onInput={(e) => setInput(e.currentTarget.textContent)}
        />

        {image ? (
          <div className="relative">
            <img
              src={URL.createObjectURL(image)}
              className="w-full h-auto rounded-md"
              alt="demo"
            />
            <button
              type="button"
              className="absolute top-1 left-2 text-lg"
              onClick={() => setImage(null)}
            >
              <i className="fa-solid fa-square-xmark"></i>
            </button>
          </div>
        ) : null}

        <div className="ml-auto flex items-center gap-4">
          <label className="cursor-pointer text-lg">
            <input
              type="file"
              className="hidden"
              onChange={(e) =>
                Math.round(e.target.files[0].size / 1024000) > 1
                  ? toast.error("File size should not be more than 1Mb")
                  : setImage(e.target.files[0])
              }
            />
            <i className="fa-solid fa-image"></i>
          </label>

          <button
            type="submit"
            className="bg-primary rounded-full py-1 px-3 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!input.trim() && !image}
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};
