import { useDispatch } from "react-redux";
import { Sidebar } from "components";
import { logoutHandler } from "features/auth";

export const Home = () => {
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-[1fr_2fr_1fr] p-4">
      <Sidebar />

      <div className="main-component">
        <h1>Home</h1>
        <button
          className="bg-primary rounded-full py-1 px-4 mt-4 w-max"
          onClick={() => dispatch(logoutHandler())}
        >
          Logout
        </button>
      </div>
    </div>
  );
};
