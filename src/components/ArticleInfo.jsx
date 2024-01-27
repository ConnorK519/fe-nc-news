import "../App.css";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

export const ArticleInfo = ({ article }) => {
  const written = dayjs(article.created_at).format("dddd, MMMM D, YYYY");
  return (
    <>
      <section className="articleInfo">
        <Link className="link" to={`/articles/${article.article_id}`}>
          <h2 className="title">{article.title}</h2>
        </Link>
        <h3>Topic: {article.topic}</h3>
        <p className="author"> Author: {article.author}</p>
        <p className="dateMade">Written: {written}</p>
        <img
          className="infoImg"
          src={article.article_img_url}
          alt={article.topic}
        />
        <p className="votes">Votes: {article.votes}</p>
        <p className="commentCount">Comments: {article.comment_count}</p>
      </section>
    </>
  );
};
