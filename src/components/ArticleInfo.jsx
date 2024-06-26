import "../App.css";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

export const ArticleInfo = ({ article }) => {
  const written = dayjs(article.created_at).format("dddd, MMMM D, YYYY");
  return (
    <>
      <section className="info  border">
        <p className="author"> Author: {article.author}</p>
        <p className="dateMade">Written: {written}</p>
        <p className="votes">Votes: {article.votes}</p>
        <p className="commentCount">Comments: {article.comment_count}</p>
        <div className="articleInfo">
          <img
            className="infoImg"
            src={article.article_img_url}
            alt={article.topic}
          />
          <div className="infoContainer">
            <Link className="link" to={`/articles/${article.article_id}`}>
              <h2 className="infoTitle">{article.title}</h2>
            </Link>
            <h3 className="topic">Topic: {article.topic}</h3>
          </div>
        </div>
      </section>
    </>
  );
};
