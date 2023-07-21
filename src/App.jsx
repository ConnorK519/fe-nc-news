import { ArticleList } from "./components/ArticleList";
import { ArticleCard } from "./components/ArticleCard";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { UsersPage } from "./components/UsersPage";
import { NavBar } from "./components/NavBar";
import { UserContext } from "./contexts/UserContext";

function App() {
  const [currentUser, setCurrentUser] = useState("tickle122");

  return (
    <>
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <div className="header">
          <a href="/">
            <h1>NC-News</h1>
          </a>
          <h3>Logged in as: {currentUser}</h3>
        </div>
        <NavBar />
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/articles/:key" element={<ArticleCard />} />
          <Route path="/users" element={<UsersPage />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
