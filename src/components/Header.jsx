import "../App.css";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../images/Logo.png";

export const Header = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <div className="page-header">
      <header className="container">
        <Link className="logo-and-title" to="/">
          <img className="logo" src={logo} alt="" />
          <h1>NC-News</h1>
        </Link>
        {currentUser && <p>Logged in as: {currentUser}</p>}
      </header>
    </div>
  );
};
