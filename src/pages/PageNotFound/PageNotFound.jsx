import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center -mt-12">
      <img
        src="/assets/404.svg"
        className="px-2 w-full max-w-[24rem]"
        alt="404"
      />

      <div className="-mt-12">
        <Link to="/">
          <i
            className="fa-solid fa-angle-double-left pr-2"
            aria-hidden="true"
          ></i>
          Back to Home
        </Link>
      </div>
    </section>
  );
};
