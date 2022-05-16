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
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
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
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
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
          "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis ",
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
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
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
      "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
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
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
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
        comment:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium",
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
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
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
        comment:
          "eveniet ut et voluptates repudiandae sint et molestiae non recusandae. ",
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
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint ",
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
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et",
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
        comment: "Hello world",
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
        comment:
          "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
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
