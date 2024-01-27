import "../App.css";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  return (
    <Link to="/">
      <header className="header">
        <h1>NC-News</h1>
        {currentUser && <h3>Logged in as: {currentUser}</h3>}
      </header>
    </Link>
  );
};
