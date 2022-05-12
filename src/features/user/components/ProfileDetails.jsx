import "../styles.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { UserAvatar } from "components";
import { logoutHandler } from "features/auth";
import { followUser, unfollowUser } from "features/user";
import { EditProfileModal } from "./EditProfileModal";

export const ProfileDetails = ({ currentUser }) => {
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [editModal, setEditModal] = useState(false);

  const {
    id,
    username,
    fullName,
    website = "",
    bio = "",
    following,
    followers,
  } = currentUser;

  const userAlreadyFollowing = followers?.find(
    (follower) => follower.id === user.id
  );

  return (
    <div className="profile-details p-4 grid grid-cols-[7rem_1fr] gap-3 border-b border-darkGrey">
      <UserAvatar name={fullName} />

      <div className="flex flex-col grow gap-3">
        <div>
          <div className="flex justify-between items-start w-full">
            <div className="flex flex-col">
              <span className="font-bold text-xl">{fullName}</span>
              <span className="text-sm text-lightGrey">@{username}</span>
            </div>

            <div className="flex items-center gap-2">
              {id === user.id ? (
                <>
                  <button
                    className="border border-primary rounded-full text-sm py-1 px-4 w-max"
                    onClick={() => setEditModal(true)}
                  >
                    Edit profile
                  </button>
                  <button
                    title="Logout"
                    onClick={() => dispatch(logoutHandler())}
                  >
                    <i className="fa-solid fa-sign-out"></i>
                  </button>
                </>
              ) : (
                <button
                  className={`py-1 px-4 rounded-full text-sm ${
                    userAlreadyFollowing
                      ? "border border-primary"
                      : "bg-primary"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    userAlreadyFollowing
                      ? dispatch(
                          unfollowUser({
                            token,
                            followUserId: currentUser._id,
                          })
                        )
                      : dispatch(
                          followUser({ token, followUserId: currentUser._id })
                        );
                  }}
                >
                  {userAlreadyFollowing ? "Unfollow" : "Follow"}
                </button>
              )}
            </div>
          </div>
        </div>

        {(website || bio) && (
          <div>
            {bio && <p>{bio}</p>}

            {website && (
              <a
                href={website}
                target="_blank"
                rel="noreferrer"
                className="hover:underline text-primary"
              >
                <i className="fa-solid fa-link mr-1 text-xs"></i>
                {website.slice(12)}
              </a>
            )}
          </div>
        )}

        <div className="flex gap-6">
          <Link to="/" className="hover:underline">
            <span className="font-bold">{following.length}</span>{" "}
            <span className="text-grey">Following</span>
          </Link>

          <Link to="/" className="hover:underline">
            <span className="font-bold">{followers.length}</span>{" "}
            <span className="text-grey">Followers</span>
          </Link>
        </div>
      </div>

      {editModal ? (
        <div className="bg-[#00000080] top-0 left-0 fixed w-full h-full z-30 flex justify-center items-center">
          <EditProfileModal setEditModal={setEditModal} />
        </div>
      ) : null}
    </div>
  );
};
