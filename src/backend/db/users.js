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
    bio: "Hey there, Himadri here",
    website: "https://www.himadrishah.tech",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      { _id: uuid(), fullName: "John Doe", username: "john_doe" },
      { _id: uuid(), fullName: "Shubham Soni", username: "shubhamsoni" },
    ],
    followers: [
      { _id: uuid(), fullName: "John Doe", username: "john_doe" },
      { _id: uuid(), fullName: "Shubham Soni", username: "shubhamsoni" },
    ],
  },
  {
    _id: uuid(),
    fullName: "John Doe",
    username: "john_doe",
    password: "123john",
    bio: "Hey there, John here",
    website: "https://www.google.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      { _id: uuid(), fullName: "Himadri Shah", username: "himadri_shah" },
    ],
    followers: [
      { _id: uuid(), fullName: "Himadri Shah", username: "himadri_shah" },
      { _id: uuid(), fullName: "Shubham Soni", username: "shubhamsoni" },
    ],
  },
  {
    _id: uuid(),
    fullName: "Shubham Soni",
    username: "shubhamsoni",
    password: "shubham456",
    bio: "Hey there, Shubham here",
    website: "https://www.google.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      { _id: uuid(), fullName: "Himadri Shah", username: "himadri_shah" },
      { _id: uuid(), fullName: "John Doe", username: "john_doe" },
    ],
    followers: [
      { _id: uuid(), fullName: "Himadri Shah", username: "himadri_shah" },
    ],
  },
];
