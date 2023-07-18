import "../App.css";
import dayjs from "dayjs";

export const ArticleInfo = ({ article }) => {
  const written = dayjs(article.created_at).format("dddd, MMMM D, YYYY");
  return (
    <>
      <section className="articleInfo">
        <h2 className="title">{article.title}</h2>
        <h3>Topic: {article.topic}</h3>
        <p className="author"> Author: {article.author}</p>
        <p className="dateMade">Written: {written}</p>
        <img src={article.article_img_url} />
        <p className="votes">Votes: {article.votes}</p>
      </section>
    </>
  );
};
