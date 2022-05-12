import { UserAvatar } from "components";
import { useNavigate } from "react-router-dom";

export const FollowListModal = ({ followModal, setFollowModal }) => {
  const { title, list } = followModal;

  const navigate = useNavigate();

  return (
    <div className="bg-darkSecondary text-sm border border-darkGrey p-4 w-80 rounded overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl">{title}</div>
        <button
          className="hover:bg-dark h-min hover:rounded-full px-2 py-0.5"
          onClick={() => setFollowModal(false)}
        >
          <i className="fa-solid fa-times"></i>
        </button>
      </div>

      <div className="flex flex-col justify-center gap-4">
        {list.length ? (
          list.map((item) => (
            <div
              key={item._id}
              className="flex gap-2 cursor-pointer"
              onClick={() => {
                navigate(`/profile/${item.username}`);
                setFollowModal(false);
              }}
            >
              <UserAvatar name={item.fullName} />

              <div className="flex flex-col -mt-0.5">
                <span className="">{item.fullName}</span>
                <span className="text-sm text-lightGrey -mt-1">
                  @{item.username}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div>Oops! No {title} found</div>
        )}
      </div>
    </div>
  );
};
