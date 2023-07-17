import { useState, useEffect } from "react";
import axios from "axios";

export const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("https://newnews-eiss.onrender.com/api/articles")
      .then(({ data: { articles } }) => {
        setArticles(articles);
      });
  }, []);
};
