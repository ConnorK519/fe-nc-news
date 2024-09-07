import { useState, useEffect } from "react";
import { ArticleInfo } from "./ArticleInfo";
import { getArticleInfo } from "../api";
import { useParams } from "react-router-dom";
import { LoadingScreen } from "./LoadingScreen";

export const ArticleList = ({ sort_by, order }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [articleListLabel, setArticleListLabel] = useState("LATEST");
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
      if (sort_by == "author") {
        const orderLabel = order == "DESC" ? "Z - A" : "A - Z";
        setArticleListLabel(`${orderLabel}`);
      }
      if (sort_by == "comment_count" || sort_by == "votes") {
        const orderLabel =
          order == "DESC" ? "HIGHEST TO LOWEST" : "LOWEST TO HIGHEST";
        setArticleListLabel(`${orderLabel}`);
      }
      if ((sort_by == "created_at" || !sort_by) && order) {
        const orderLabel = order == "DESC" ? "LATEST" : "OLDEST";
        setArticleListLabel(`${orderLabel}`);
      }
      setArticles(articles);
      setLoading(false);
      window.scrollTo(0, 0);
    });
  }, [sort_by, order, topic, currentPage]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <div className="container">
        <div className="separator">
          <p className="separator-label">{articleListLabel}</p>
          <p className="page-label">PAGE {currentPage}</p>
        </div>
        <div className="article-display-grid">
          {articles.map((article) => {
            if (articles.indexOf(article) < 5)
              return <ArticleInfo key={article.article_id} article={article} />;
          })}
        </div>
        <div className="separator">
          <p className="separator-label">MORE ARTICLES</p>
        </div>
        <div className="more-articles">
          {articles.map((article) => {
            if (articles.indexOf(article) > 4)
              return <ArticleInfo key={article.article_id} article={article} />;
          })}
        </div>
        <div className="separator">
          <p className="separator-label">PAGES</p>
        </div>
        <div className="pagesBox">
          {Array.from(
            { length: articles[0].total_pages },
            (_, index) => index + 1
          ).map((num) => {
            return (
              <a
                key={num}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(num);
                }}
                className="pageNum"
              >
                {num}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};
