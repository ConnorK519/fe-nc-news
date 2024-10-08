import "../App.css";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../images/Logo.png";

export const Header = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <header className="page-header">
      <dic className="container">
        <Link className="logo-and-title link" to="/">
          <img
            className="logo"
            src={logo}
            alt="A small dark blue triangle with the white outline of mountains inside."
          />
          <p className="site-name">NC-News</p>
        </Link>
        {currentUser && (
          <p className="logged-in-user">Logged in as: {currentUser}</p>
        )}
      </dic>
    </header>
  );
};
