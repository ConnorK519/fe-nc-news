import { useState, useEffect } from "react";
import { getArticleComments } from "../api";
import { CommentCard } from "./CommentCard";

export const CommentsList = ({ keyId }) => {
  const [newComments, setNewComments] = useState([]);

  useEffect(() => {
    getArticleComments(keyId).then((comments) => {
      setNewComments(comments);
    });
  }, []);

  if (newComments.length === 0) {
    return <h2>There are no Comments</h2>;
  }

  return (
    <>
      <section>
        {newComments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </section>
    </>
  );
};
