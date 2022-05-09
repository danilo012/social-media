import { useSelector } from "react-redux";

export const UserAvatar = ({ name }) => {
  const { user } = useSelector((state) => state.auth);

  const userInitials = name ? name.split(" ") : user.fullName.split(" ");

  return (
    <span className="h-8 w-8 rounded-full text-sm flex justify-center items-center bg-primary">
      {`${userInitials[0][0]}${userInitials[1][0]}`}
    </span>
  );
};
