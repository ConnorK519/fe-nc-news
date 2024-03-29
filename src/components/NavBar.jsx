import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { getTopics } from "../api";

export const NavBar = ({ setSortBy, setOrder }) => {
  const [topics, setTopics] = useState([]);

  const nav = useNavigate();

  useEffect(() => {
    getTopics().then((newTopics) => {
      setTopics(newTopics);
    });
  }, []);

  const validSorts = ["Author", "Comments", "Date", "Votes"];

  function handleSelectTopic(topic) {
    if (topic === "all") {
      nav(`/`);
    } else {
      nav(`/articles/topics/${topic}`);
    }
  }

  function goToUsers() {
    nav("/users");
  }

  return (
    <nav>
      <button onClick={goToUsers}>Users</button>
      <select
        onChange={(e) => {
          handleSelectTopic(e.target.value);
        }}
      >
        <option value="all">Filter by Topic</option>
        {topics.map((topic) => {
          return (
            <option key={topic.slug} value={topic.slug}>
              {topic.slug}
            </option>
          );
        })}
      </select>

      <select onChange={(e) => setSortBy(e.target.value.toLowerCase())}>
        <option value="date">Sort By</option>
        {validSorts.map((sort) => {
          return (
            <option key={sort} value={sort}>
              {sort}
            </option>
          );
        })}
      </select>

      <select onChange={(e) => setOrder(e.target.value)}>
        <option value="DESC">Sort Order</option>
        <option value="ASC">Ascending</option>
        <option value="DESC">Descending</option>
      </select>
    </nav>
  );
};
