import "../App.css";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { ArticleList } from "./ArticleList";

export const ArticleInfo = ({ article }) => {
  const written = dayjs(article.created_at).format("dddd, MMMM D, YYYY");
  return (
    <div className="article-display-card">
      <Link to={`/articles/${article.article_id}`} className="link">
        <article className={article.container}>
          <img src={article.article_img_url} alt={article.topic} />
          <div className="article-content">
            <p className="article-title">{article.title}</p>
            <p className="author-and-posted-at">
              Posted by <strong>{article.author}</strong> on {written}
            </p>
            <p className="comment-and-vote-counter">
              🗪: {article.comment_count} 👍: {article.votes}
            </p>
          </div>
        </article>
      </Link>
    </div>
  );
};
