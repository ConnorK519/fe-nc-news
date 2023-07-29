import "../App.css";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  return (
    <header className="header">
      <Link to="/">
        <h1>NC-News</h1>
      </Link>
      {currentUser && <h3>Logged in as: {currentUser}</h3>}
    </header>
  );
};
