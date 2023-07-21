import { useState, useEffect } from "react";
import { getUsers } from "../api";
import { UserCard } from "./UserCard";
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
      {currentUser && <h3>Signed in as: {currentUser}</h3>}
      <section>
        {users.map((user, index) => {
          return <UserCard key={index} user={user} />;
        })}
      </section>
    </>
  );
};
