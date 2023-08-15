import { useState, useEffect } from "react";
import { ArticleInfo } from "./ArticleInfo";
import { getArticleInfo } from "../api";
import { useParams } from "react-router-dom";

export const ArticleList = ({ sort_by, order }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const { topic } = useParams();

  useEffect(() => {
    getArticleInfo(sort_by, order, topic).then((articles) => {
      setArticles(articles);
      setLoading(false);
    });
  }, [sort_by, order, topic]);

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
