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

  return (
    <>
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <Header />
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
