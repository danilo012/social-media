import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    fullName: "Himadri Shah",
    username: "himadri_shah",
    password: "himadri123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
