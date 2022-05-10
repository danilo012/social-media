import axios from "axios";

export const getBookmarkService = (token) => {
  return axios.get("/api/users/bookmark", {
    headers: { authorization: token },
  });
};

export const addBookmarkService = ({ token, _id }) => {
  return axios.post(
    `/api/users/bookmark/${_id}`,
    {},
    { headers: { authorization: token } }
  );
};

export const removeBookmarkService = ({ token, _id }) => {
  return axios.post(
    `/api/users/remove-bookmark/${_id}`,
    {},
    { headers: { authorization: token } }
  );
};
