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

  const validSorts = ["author", "comment_count", "created_at", "votes"];

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
    <div className="nav-background">
      <nav className="container">
        <button onClick={goToUsers}>Users</button>
        <select
          onChange={(e) => {
            handleSelectTopic(e.target.value);
          }}
        >
          <option className="drop-down" value="all">
            Topic
          </option>
          {topics.map((topic) => {
            return (
              <option className="drop-down" key={topic.slug} value={topic.slug}>
                {topic.slug}
              </option>
            );
          })}
        </select>
        <select onChange={(e) => setSortBy(e.target.value.toLowerCase())}>
          <option className="drop-down" value="created_at">
            Sort By
          </option>
          {validSorts.map((sort) => {
            return (
              <option className="drop-down" key={sort} value={sort}>
                {sort}
              </option>
            );
          })}
        </select>

        <select onChange={(e) => setOrder(e.target.value)}>
          <option className="drop-down" value="DESC">
            Sort Order
          </option>
          <option className="drop-down" value="ASC">
            Ascending
          </option>
          <option className="drop-down" value="DESC">
            Descending
          </option>
        </select>
      </nav>
    </div>
  );
};
