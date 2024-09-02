import { useState, useEffect } from "react";
import { ArticleInfo } from "./ArticleInfo";
import { getArticleInfo } from "../api";
import { useParams } from "react-router-dom";

export const ArticleList = ({ sort_by, order }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [maxPages, setMaxPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const { topic } = useParams();

  useEffect(() => {
    getArticleInfo(sort_by, order, topic, currentPage).then((articles) => {
      for (const article of articles) {
        if (articles.indexOf(article) == 0) {
          article.container = "featured-article";
        } else if (articles.indexOf(article) < 10) {
          article.container = "side-article";
        }
      }
      setMaxPages(articles[0].total_pages);
      setArticles(articles);
      setLoading(false);
    });
  }, [sort_by, order, topic, maxPages, currentPage]);

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <>
      <div className="separator">
        <p className="separator-label">LATEST</p>
        <p className="page-label">PAGE {currentPage}</p>
      </div>
      <div className="article-display-grid">
        {articles.map((article) => {
          return <ArticleInfo key={article.article_id} article={article} />;
        })}
      </div>
    </>
  );
};
