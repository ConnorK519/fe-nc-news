import { useState, useEffect } from "react";
import { getUsers } from "../api";
import "../App.css";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const { currentUser, setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    getUsers().then(({ users }) => {
      setUsers(users);
    });
  }, []);

  return (
    <>
      <section>
        {users.map((user, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setCurrentUser(user.username);
              }}
              className="userCard"
            >
              <img
                key={user.avatar_url}
                className="avatarSize"
                src={user.avatar_url}
              />
              <h3 key={user.username}>{user.username}</h3>
            </div>
          );
        })}
      </section>
    </>
  );
};
