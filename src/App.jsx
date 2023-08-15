import { ArticleList } from "./components/ArticleList";
import { ArticleCard } from "./components/ArticleCard";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { UsersPage } from "./components/UsersPage";
import { NavBar } from "./components/NavBar";
import { UserContext } from "./contexts/UserContext";
import { Header } from "./components/Header";

function App() {
  const [currentUser, setCurrentUser] = useState("");
  const [sort_by, setSortBy] = useState(null);
  const [order, setOrder] = useState(null);

  return (
    <>
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <Header />
        <NavBar setSortBy={setSortBy} setOrder={setOrder} />
        <Routes>
          <Route
            path="/"
            element={<ArticleList sort_by={sort_by} order={order} />}
          />
          <Route
            path="/articles/topics/:topic"
            element={<ArticleList sort_by={sort_by} order={order} />}
          />
          <Route path="/articles/:key" element={<ArticleCard />} />

          <Route path="/users" element={<UsersPage />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
