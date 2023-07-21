import "../App.css";
import { useContext } from "react";
import { UserContext } from "../contexts/Users";

export const UserCard = ({ user }) => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const handleClick = () => {
    setCurrentUser(user.username);
  };

  return (
    <>
      <div onClick={handleClick} className="userCard">
        <img className="avatarSize" src={user.avatar_url} />
        <h3>{user.username}</h3>
      </div>
    </>
  );
};
