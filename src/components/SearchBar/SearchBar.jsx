import { useSelector, useDispatch } from "react-redux";
import { setSearchVal } from "features/user";
import { SearchedUsersModal } from "components";

export const SearchBar = () => {
  const { searchVal } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const debounce = (fn, delay) => {
    let timer = 0;

    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  return (
    <div className="sticky top-0.5 z-30">
      <div>
        <input
          type="text"
          onChange={debounce(
            (e) => dispatch(setSearchVal(e.target.value)),
            400
          )}
          placeholder="Search users..."
          className=" mx-4 my-3 py-2 px-4 w-full outline-none bg-darkSecondary rounded-full border border-darkGrey focus:border-primary"
        />
      </div>

      {searchVal.length ? (
        <div className="absolute top-15 w-full mx-4">
          <SearchedUsersModal />
        </div>
      ) : null}
    </div>
  );
};
