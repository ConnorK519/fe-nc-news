import { useState, useEffect } from "react";
import { ArticleInfo } from "./ArticleInfo";
import { getArticleInfo } from "../api";

export const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticleInfo().then((articles) => {
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
