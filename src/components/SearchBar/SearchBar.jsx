import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchVal } from "features/user";
import { SearchedUsersModal } from "components";
import { debounce } from "utils";

export const SearchBar = () => {
  const { searchVal } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const searchRef = useRef();

  useEffect(() => {
    const closeOptionsModal = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        dispatch(setSearchVal(""));
      }
    };
    document.addEventListener("mousedown", closeOptionsModal);

    return () => document.removeEventListener("mousedown", closeOptionsModal);
  }, [searchRef, dispatch]);

  return (
    <div className="sticky top-[15px] mr-4 xl:mr-0 z-40" ref={searchRef}>
      <div className="relative mx-4 2xl:my-3 w-full rounded-full border border-darkGrey focus-within:border-primary bg-darkSecondary ">
        <input
          type="text"
          onChange={debounce(
            (e) => dispatch(setSearchVal(e.target.value)),
            400
          )}
          onFocus={debounce((e) => dispatch(setSearchVal(e.target.value)), 400)}
          placeholder="Search users..."
          className="bg-inherit text-sm xl:text-base py-2 px-4 w-[90%] outline-none rounded-full"
        />
        <i className="fa-solid fa-magnifying-glass ml-2 absolute right-4  top-2.5 xl:top-3"></i>
      </div>

      {searchVal.length ? (
        <div className="absolute top-15 w-full mx-4">
          <SearchedUsersModal />
        </div>
      ) : null}
    </div>
  );
};
