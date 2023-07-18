import { useState, useEffect } from "react";
import { ArticleInfo } from "./ArticleInfo";
import axios from "axios";

export const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://newnews-eiss.onrender.com/api/articles")
      .then(({ data: { articles } }) => {
        setArticles(articles);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <>
      {articles.map((article) => {
        return <ArticleInfo key={article.article_id} article={article} />;
      })}
    </>
  );
};
