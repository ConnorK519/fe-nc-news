import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { getTopics } from "../api";

export const NavBar = ({ setSortBy, setOrder }) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((newTopics) => {
      console.log(newTopics);
      setTopics(newTopics);
    });
  }, []);

  const validSorts = ["Author", "ID", "Date", "Votes"];

  return (
    <nav>
      <Link to="/users">
        <button>Users</button>
      </Link>
      <select>
        <option>Filter by Topic</option>
        {topics.map((topic) => {
          return (
            <option key={topic.slug} value={topic.slug}>
              {topic.slug}
            </option>
          );
        })}
      </select>
      <select onChange={(e) => setSortBy(e.target.value.toLowerCase())}>
        <option>Sort By</option>
        {validSorts.map((sort) => {
          return (
            <option key={sort} value={sort}>
              {sort}
            </option>
          );
        })}
      </select>
      <select onChange={(e) => setOrder(e.target.value)}>
        <option>Sort Order</option>
        <option value="ASC">Ascending</option>
        <option value="DESC">Descending</option>
      </select>
    </nav>
  );
};
