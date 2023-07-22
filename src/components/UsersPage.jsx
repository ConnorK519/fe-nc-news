import { useState, useEffect } from "react";
import { getUsers } from "../api";
import "../App.css";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { UserCard } from "./UserCard";

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
          return <UserCard key={index} user={user} />;
        })}
      </section>
    </>
  );
};
