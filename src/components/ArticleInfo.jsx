import "../App.css";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

export const ArticleInfo = ({ article }) => {
  const written = dayjs(article.created_at).format("dddd, MMMM D, YYYY");
  return (
    <div className="article-display-card">
      <Link to={`/articles/${article.article_id}`} className="link">
        <article className={article.container}>
          <img src={article.article_img_url} alt={article.topic} />
          <div className="article-content">
            <h2 className="article-info-title">{article.title}</h2>
            <p className="author-and-posted-at">
              <strong>{article.author}</strong> - {written}
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
