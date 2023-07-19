import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticle } from "../api";
import { CommentsList } from "./CommentList";
import dayjs from "dayjs";
import "../App.css";

export const ArticleCard = () => {
  const { key } = useParams();

  const [newArticle, setNewArticle] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticle(key).then((article) => {
      setNewArticle(article);
      setLoading(false);
    });
  }, []);

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
        <button className="votes">Vote: {newArticle.votes}</button>
      </section>
      <section>
        <CommentsList keyId={key} />
      </section>
    </>
  );
};
