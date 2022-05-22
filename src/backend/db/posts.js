import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "In some ways, programming is like painting. You start with a blank canvas and certain basic raw materials. You use a combination of science, art, and craft to determine what to do with them.",
    image: null,
    imageAlt: "",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "john_doe",
    fullName: "John Doe",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "People want to get real world experience and Open Source is just sitting there waiting for YOU!",
    image: null,
    imageAlt: "",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "himadri_shah",
    fullName: "Himadri Shah",
    createdAt: "2021-05-10",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment:
          "I am new to this. How to start open source?? Can anyone tell me",
        fullName: "Nikhil_Belide",
        username: "Nikhil_Belide",
        profileAvatar:
          "https://res.cloudinary.com/dsxjhas6t/image/upload/v1652432744/sapphire/150_enlsji.jpg",
        createdAt: "2021-05-10",
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "You are wealthy when you can freely decide what to do with your time.",
    image: null,
    imageAlt: "",
    likes: {
      likeCount: 2,
      likedBy: [
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
      dislikedBy: [],
    },
    username: "shubhamsoni",
    fullName: "Shubham Soni",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "I'm not even buying Twitter and I spend 80% of my time thinking about it.",
    image: null,
    imageAlt: "",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Nikhil_Belide",
    fullName: "Nikhil_Belide",
    createdAt: "2021-05-03",
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Programming isn't about what you know; it's about what you can figure out.",
    image: null,
    imageAlt: "",
    likes: {
      likeCount: 2,
      likedBy: [
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
      dislikedBy: [],
    },
    username: "john_doe",
    fullName: "John Doe",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment: "Especially important for beginners.",
        fullName: "Shubham Soni",
        username: "shubhamsoni",
        profileAvatar:
          "https://res.cloudinary.com/dsxjhas6t/image/upload/v1652433079/sapphire/150_qbbogt.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one which has been opened for us.",
    image:
      "https://res.cloudinary.com/dsxjhas6t/image/upload/v1652783007/sapphire/uyaoznqmfwm2uxxszhk9.jpg",
    imageAlt: "Road",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: uuid(),
          fullName: "Shubham Soni",
          username: "shubhamsoni",
          profileAvatar:
            "https://res.cloudinary.com/dsxjhas6t/image/upload/v1652433079/sapphire/150_qbbogt.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "Nikhil_Belide",
    fullName: "Nikhil_Belide",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment: "Nice one!",
        username: "john_doe",
        fullName: "John Doe",
        profileAvatar:
          "https://res.cloudinary.com/dsxjhas6t/image/upload/v1652433139/sapphire/150_bo4wzw.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "If I can help people I'll do it by giving them a chance to help themselves; and if I can uplift or inspire, let it be by example, inference and suggestion, rather than by injunction and dictation.",
    image: null,
    imageAlt: "",
    likes: {
      likeCount: 3,
      likedBy: [
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
      dislikedBy: [],
    },
    username: "himadri_shah",
    fullName: "Himadri Shah",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "When Jake Peralta said “cool cool cool cool cool cool”, he was talking about Bangalore's weather 😌",
    image: null,
    imageAlt: "",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shubhamsoni",
    fullName: "Shubham Soni",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment: "Yes, of course",
        username: "john_doe",
        fullName: "John Doe",
        profileAvatar:
          "https://res.cloudinary.com/dsxjhas6t/image/upload/v1652433139/sapphire/150_bo4wzw.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment: "❤ for bangalore",
        fullName: "Himadri Shah",
        username: "himadri_shah",
        profileAvatar:
          "https://res.cloudinary.com/dsxjhas6t/image/upload/v1652433208/sapphire/150_x5gbob.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
];
