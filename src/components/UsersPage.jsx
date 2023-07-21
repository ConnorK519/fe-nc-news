import { useState, useEffect } from "react";
import { getUsers } from "../api";
import { UserCard } from "./UserCard";
import "../App.css";

export const UsersPage = () => {
  const [users, setUsers] = useState([]);

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
