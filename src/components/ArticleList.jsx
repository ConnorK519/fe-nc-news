import { useState, useEffect } from "react";
import { ArticleInfo } from "./ArticleInfo";
import axios from "axios";

export const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("https://newnews-eiss.onrender.com/api/articles")
      .then(({ data: { articles } }) => {
        console.log(articles);
        setArticles(articles);
      });
  }, []);

  return (
    <>
      {articles.map((article) => {
        return <ArticleInfo key={article.article_id} article={article} />;
      })}
    </>
  );
};
