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
    bio: "Web Developer",
    website: "https://himadrishah.tech",
    profileAvatar:
      "https://res.cloudinary.com/dsxjhas6t/image/upload/v1652433208/sapphire/150_x5gbob.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        fullName: "Shubham Soni",
        username: "shubhamsoni",
        profileAvatar:
          "https://res.cloudinary.com/dsxjhas6t/image/upload/v1652433079/sapphire/150_qbbogt.jpg",
      },
      {
        _id: uuid(),
        fullName: "Nikhil_Belide",
        username: "Nikhil_Belide",
        profileAvatar:
          "https://res.cloudinary.com/dsxjhas6t/image/upload/v1652432744/sapphire/150_enlsji.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        fullName: "John Doe",
        username: "john_doe",
        profileAvatar:
          "https://res.cloudinary.com/dsxjhas6t/image/upload/v1652433139/sapphire/150_bo4wzw.jpg",
      },
      {
        _id: uuid(),
        fullName: "Shubham Soni",
        username: "shubhamsoni",
        profileAvatar:
          "https://res.cloudinary.com/dsxjhas6t/image/upload/v1652433079/sapphire/150_qbbogt.jpg",
      },
      {
        _id: uuid(),
        fullName: "Nikhil_Belide",
        username: "Nikhil_Belide",
        profileAvatar:
          "https://res.cloudinary.com/dsxjhas6t/image/upload/v1652432744/sapphire/150_enlsji.jpg",
      },
    ],
  },
  {
    _id: uuid(),
    fullName: "John Doe",
    username: "john_doe",
    password: "123john",
    bio: "People use my name for dummy user",
    website: "https://johndoehub.com",
    profileAvatar:
      "https://res.cloudinary.com/dsxjhas6t/image/upload/v1652433139/sapphire/150_bo4wzw.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        fullName: "Himadri Shah",
        username: "himadri_shah",
        profileAvatar:
          "https://res.cloudinary.com/dsxjhas6t/image/upload/v1652433208/sapphire/150_x5gbob.jpg",
      },
      {
        _id: uuid(),
        fullName: "Nikhil_Belide",
        username: "Nikhil_Belide",
        profileAvatar:
          "https://res.cloudinary.com/dsxjhas6t/image/upload/v1652432744/sapphire/150_enlsji.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        fullName: "Shubham Soni",
        username: "shubhamsoni",
        profileAvatar:
          "https://res.cloudinary.com/dsxjhas6t/image/upload/v1652433079/sapphire/150_qbbogt.jpg",
      },
    ],
  },
  {
    _id: uuid(),
    fullName: "Shubham Soni",
    username: "shubhamsoni",
    password: "shubham456",
    bio: "AI Enthusiast",
    website: "https://shubhamsoni.me",
    profileAvatar:
      "https://res.cloudinary.com/dsxjhas6t/image/upload/v1652433079/sapphire/150_qbbogt.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        fullName: "Himadri Shah",
        username: "himadri_shah",
        profileAvatar:
          "https://res.cloudinary.com/dsxjhas6t/image/upload/v1652433208/sapphire/150_x5gbob.jpg",
      },
      {
        _id: uuid(),
        fullName: "John Doe",
        username: "john_doe",
        profileAvatar:
          "https://res.cloudinary.com/dsxjhas6t/image/upload/v1652433139/sapphire/150_bo4wzw.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        fullName: "Himadri Shah",
        username: "himadri_shah",
        profileAvatar:
          "https://res.cloudinary.com/dsxjhas6t/image/upload/v1652433208/sapphire/150_x5gbob.jpg",
      },
    ],
  },
  {
    _id: uuid(),
    fullName: "Nikhil_Belide",
    username: "Nikhil_Belide",
    password: "nikhil_00",
    bio: "Web Dev under Construction",
    website: "https://nikhil-belide.netlify.app",
    profileAvatar:
      "https://res.cloudinary.com/dsxjhas6t/image/upload/v1652432744/sapphire/150_enlsji.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        fullName: "Himadri Shah",
        username: "himadri_shah",
        profileAvatar:
          "https://res.cloudinary.com/dsxjhas6t/image/upload/v1652433208/sapphire/150_x5gbob.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        fullName: "John Doe",
        username: "john_doe",
        profileAvatar:
          "https://res.cloudinary.com/dsxjhas6t/image/upload/v1652433139/sapphire/150_bo4wzw.jpg",
      },
      {
        _id: uuid(),
        fullName: "Himadri Shah",
        username: "himadri_shah",
        profileAvatar:
          "https://res.cloudinary.com/dsxjhas6t/image/upload/v1652433208/sapphire/150_x5gbob.jpg",
      },
    ],
  },
];
