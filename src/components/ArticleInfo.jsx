import "../App.css";

export const ArticleInfo = ({ article }) => {
  return (
    <>
      <section className="articleInfo">
        <h2 className="title">{article.title}</h2>
        <h3>Topic: {article.topic}</h3>
        <p className="author"> Author: {article.author}</p>
        <p className="dateMade">Written: {article.created_at}</p>
        <img src={article.article_img_url} />
        <p className="votes">Votes: {article.votes}</p>
      </section>
    </>
  );
};
