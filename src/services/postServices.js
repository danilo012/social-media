import axios from "axios";

const getAllPostsService = () => {
  return axios.get("/api/posts");
};

const createPostService = ({ input, token, user }) => {
  return axios.post(
    "/api/posts",
    { postData: { content: input, fullName: user.fullName } },
    {
      headers: { authorization: token },
    }
  );
};

const editPostService = ({ token, post, input }) => {
  return axios.post(
    `/api/posts/edit/${post._id}`,
    { postData: { content: input } },
    {
      headers: { authorization: token },
    }
  );
};

const deletePostService = ({ _id, token }) => {
  return axios.delete(`/api/posts/${_id}`, {
    headers: { authorization: token },
  });
};

const likePostService = ({ _id, token }) => {
  return axios.post(
    `/api/posts/like/${_id}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

const dislikePostService = ({ _id, token }) => {
  return axios.post(
    `/api/posts/dislike/${_id}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

export {
  getAllPostsService,
  createPostService,
  editPostService,
  deletePostService,
  likePostService,
  dislikePostService,
};
