import { Link, NavLink } from "react-router-dom";

export const Sidebar = () => {
  const { fullName } = JSON.parse(localStorage.getItem("SM_user"));

  return (
    <aside className="aside">
      <ul>
        <li>
          <Link to="/" className="nav-brand flex items-center">
            <img src="sapphire.svg" alt="Sapphire" className="h-6 w-6" />
            <span className="text-xl px-2">Sapphire</span>
          </Link>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            <i className="fa-solid fa-house"></i> Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/explore"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            <i className="fa-solid fa-hashtag"></i> Explore
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/notifications"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            <i className="fa-solid fa-bell"></i> Notifications
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/bookmarks"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            <i className="fa-solid fa-bookmark"></i> Bookmarks
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            <i className="fa-solid fa-user"></i> {fullName}
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};
