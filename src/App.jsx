import { ArticleList } from "./components/ArticleList";
import { ArticleCard } from "./components/ArticleCard";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="header">
        <a href="/">
          <h1>NC-News</h1>
        </a>
      </div>
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/articles/:key" element={<ArticleCard />} />
      </Routes>
    </>
  );
}

export default App;
