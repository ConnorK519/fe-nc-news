import { useState } from "react";
import "./App.css";
import { ArticleList } from "./components/ArticleList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="header">
        <h1>NC-News</h1>
      </div>
      <ArticleList />
    </>
  );
}

export default App;
