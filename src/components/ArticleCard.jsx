import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticle } from "../api";
import { CommentsList } from "./CommentList";
import { patchArticle } from "../api";
import dayjs from "dayjs";
import "../App.css";

export const ArticleCard = () => {
  const { key } = useParams();

  const [newArticle, setNewArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [userVote, setUserVote] = useState(0);

  useEffect(() => {
    getArticle(key).then((article) => {
      setNewArticle(article);
      setUserVote(article.votes);
      setLoading(false);
    });
  }, []);

  const handleClick = (vote) => {
    patchArticle(key, vote).then((updatedArticle) => {
      setUserVote((current) => {
        return current + vote;
      });
    });
  };

  if (loading) {
    return <>Loading...</>;
  }

  const written = dayjs(newArticle.created_at).format("dddd, MMMM D, YYYY");

  return (
    <>
      <section className="articleInfo">
        <h2 className="title">{newArticle.title}</h2>
        <p className="author">Author: {newArticle.author}</p>
        <p className="dateMade">Written: {written}</p>
        <p>{newArticle.body}</p>
        <img src={newArticle.article_img_url} />
        <section className="votesBox">
          <button onClick={() => handleClick(1)} disabled={userVote > 0}>
            👍
          </button>
          <h3 className="voteSpacing">{newArticle + userVote}</h3>
          <button onClick={() => handleClick(-1)} disabled={userVote < 0}>
            👎
          </button>
        </section>
      </section>
      <section>
        <CommentsList keyId={key} />
      </section>
    </>
  );
};
