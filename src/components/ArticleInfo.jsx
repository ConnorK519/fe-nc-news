import "../App.css";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { ArticleList } from "./ArticleList";

export const ArticleInfo = ({ article }) => {
  const written = dayjs(article.created_at).format("dddd, MMMM D, YYYY");
  return (
    <div className="article-display-card">
      <article className={article.container}>
        <img src={article.article_img_url} alt={article.topic} />
        <div className="article-content">
          <p>{article.title}</p>
          <p className="author-and-posted-at">
            Posted by <strong>{article.author}</strong> on {written}
          </p>
          <p className="comment-and-vote-counter">
            🗪: {article.comment_count} 👍: {article.votes}
          </p>
        </div>
      </article>
    </div>
    // <div className="article-display-card">
    //   <img src={article.article_img_url} alt={article.topic} />
    //   <h2 className="">{article.title}</h2>
    //   <article className="info  border">
    //     <div className="articleInfo">
    //       <img
    //         className="infoImg"
    //         src={article.article_img_url}
    //         alt={article.topic}
    //       />
    //       <div className="infoContainer">
    //         <Link className="link" to={`/articles/${article.article_id}`}>
    //           <h2 className="infoTitle">{article.title}</h2>
    //         </Link>
    //         <h3 className="topic">Topic: {article.topic}</h3>
    //         <p className="author"> Author: {article.author}</p>
    //         <p className="dateMade">Written: {written}</p>
    //         <p className="votes">Votes: {article.votes}</p>
    //         <p className="commentCount">Comments: {article.comment_count}</p>
    //       </div>
    //     </div>
    //   </article>
    // </div>
  );
};
