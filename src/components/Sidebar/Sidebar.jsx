import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserAvatar } from "components";

const activeStyle = {
  backgroundColor: "#001e39",
  borderRadius: "9999px",
  padding: "0.75rem",
  width: "max-content",
  fontWeight: "bold",
};

export const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.user);

  const currentUser = users.find((dbUser) => dbUser.username === user.username);

  return (
    <aside className="sm:sticky bg-dark  flex sm:flex-col sm:justify-between sm:h-screen sm:top-0 sm:overflow-y-auto overflow-x-hidden fixed bottom-0 left-0 w-full items-center  sm:border-0 border-t-2 border-darkGrey sm:z-0 z-40">
      <ul className="flex items-center sm:items-start justify-start px-3 py-4 sm:flex-col gap-3 sm:gap-6 tracking-wide grow">
        <li className="sm:pb-3 sm:px-3 hidden sm:block">
          <Link to="/" className="flex items-center">
            <img src="/sapphire.svg" alt="Sapphire" className="h-6 w-6 mr-2" />
            <span className="text-xl hidden lg:inline">Sapphire</span>
          </Link>
        </li>

        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className="p-3 w-max hover:bg-darkSecondary hover:rounded-full"
          >
            <i className="fa-solid fa-house px-0.5 lg:pr-2"></i>
            <span className="hidden lg:inline">Home</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/explore"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className="p-3 w-max hover:bg-darkSecondary hover:rounded-full"
          >
            <i className="fa-solid fa-hashtag px-1 lg:pr-2"></i>
            <span className="hidden lg:inline">Explore</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/bookmarks"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className="p-3 w-max hover:bg-darkSecondary hover:rounded-full"
          >
            <i className="fa-solid fa-bookmark px-1 lg:pr-2"></i>
            <span className="hidden lg:inline">Bookmarks</span>
          </NavLink>
        </li>
      </ul>

      <ul className="tracking-wide pr-2">
        <li>
          <NavLink
            to={`/profile/${currentUser?.username}`}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className="p-3 w-max flex items-center justify-center gap-2 hover:bg-darkSecondary hover:rounded-full"
          >
            <UserAvatar user={currentUser} />

            <div className="text-sm hidden lg:inline">
              <p className="font-bold">{currentUser?.fullName}</p>
              <p className="text-lightGrey font-normal">
                @{currentUser?.username}
              </p>
            </div>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};
