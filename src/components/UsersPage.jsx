import { useState, useEffect } from "react";
import { getUsers } from "../api";
import "../App.css";
import { UserCard } from "./UserCard";
import { LoadingScreen } from "./LoadingScreen";

export const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers().then(({ users }) => {
      setUsers(users);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

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
