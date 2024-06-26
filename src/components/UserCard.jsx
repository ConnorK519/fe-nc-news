import "../App.css";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const UserCard = ({ user }) => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  return (
    <div className="container">
      <div
        onClick={() => {
          setCurrentUser(user.username);
        }}
        className="userCard border"
      >
        <img alt={user.username} className="avatarSize" src={user.avatar_url} />
        <h3>{user.username}</h3>
      </div>
    </div>
  );
};
