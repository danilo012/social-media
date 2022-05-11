import { useSelector } from "react-redux";

export const UserAvatar = ({ name }) => {
  const { user } = useSelector((state) => state.auth);

  const userInitials = name ? name.split(" ") : user.fullName.split(" ");

  const initialsArray = userInitials.map((initial) => initial[0].toUpperCase());

  return (
    <span className="h-8 w-8 rounded-full text-sm flex justify-center items-center bg-primary">
      {initialsArray.join("")}
    </span>
  );
};
