import { useState, useEffect } from "react";
import { ArticleInfo } from "./ArticleInfo";
import { getArticleInfo } from "../api";

export const ArticleList = ({ sort_by, order }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticleInfo(sort_by, order).then((articles) => {
      setArticles(articles);
      setLoading(false);
    });
  }, [sort_by, order]);

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
