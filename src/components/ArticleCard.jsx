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
  const [voteError, setVoteError] = useState("");
  const [voteConfirm, setVoteConfirm] = useState("");
  const [originalVotes, setOriginalVotes] = useState(0);

  useEffect(() => {
    getArticle(key).then((article) => {
      setNewArticle(article);
      setLoading(false);
      setOriginalVotes(article.votes);
    });
  }, []);

  const handleClick = (vote) => {
    setUserVote((current) => {
      return current + vote;
    });
    patchArticle(key, vote)
      .then((updatedArticle) => {
        setVoteError("");
        setVoteConfirm("confirm");
      })
      .catch((err) => {
        setVoteError("An Error Occurred During your request");
        setUserVote(0);
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
        <img className="img" src={newArticle.article_img_url} />
        <div className="votesBox">
          {voteError && <h4>{voteError}</h4>}
          <button
            onClick={() => handleClick(1)}
            disabled={userVote > 0}
            className={userVote > 0 && voteConfirm}
          >
            👍
          </button>
          <h3 className="voteSpacing">{originalVotes + userVote}</h3>
          <button
            onClick={() => handleClick(-1)}
            disabled={userVote < 0}
            className={userVote < 0 && voteConfirm}
          >
            👎
          </button>
        </div>
      </section>
      <section>
        <CommentsList keyId={key} />
      </section>
    </>
  );
};
