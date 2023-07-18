import { useState, useEffect } from "react";
import { getArticleComments } from "../api";
import { CommentCard } from "./CommentCard";

export const CommentsList = ({ keyId }) => {
  const [newComments, setNewComments] = useState([]);

  useEffect(() => {
    getArticleComments(keyId).then(({ data: { comments } }) => {
      setNewComments(comments);
    });
  }, []);

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
