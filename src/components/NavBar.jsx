import { Link } from "react-router-dom";
import "../App.css";

export const NavBar = () => {
  return (
    <nav className="userCard">
      <Link to="/users">
        <button>Users</button>
      </Link>
    </nav>
  );
};
