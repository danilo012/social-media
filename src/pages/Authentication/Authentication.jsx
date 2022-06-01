import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Loader } from "components";

export const Authentication = () => {
  const { isLoading } = useSelector((state) => state.auth);

  return (
    <div className="grow p-4 flex justify-center items-center">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="m-auto w-full h-full flex lg:flex-row flex-col gap-8 lg:gap-12 items-center lg:justify-center">
          <div className="max-w-[20rem] text-2xl flex flex-col -mt-12">
            <img
              src="/assets/welcome.svg"
              className="w-full h-auto"
              alt="Welcome"
            />
            <div className="text-center">
              Find your tribe & fulfill your social needs!
            </div>
          </div>

          <Outlet />
        </div>
      )}
    </div>
  );
};
