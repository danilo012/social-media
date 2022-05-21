import toast from "react-hot-toast";

export const sharePost = (postId) => {
  navigator.clipboard.writeText(
    `https://sapphire-sm.netlify.app/post/${postId}`
  );
  toast.success("Link copied to clipboard");
};
