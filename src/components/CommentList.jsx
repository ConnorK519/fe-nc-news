import { useState, useEffect } from "react";
import { getArticleComments } from "../api";
import { CommentCard } from "./CommentCard";
import { CreateComment } from "./CreateComment";

export const CommentsList = ({ keyId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getArticleComments(keyId).then((comments) => {
      setComments(comments);
    });
  }, [keyId]);

  if (comments.length === 0) {
    return <h2>There are no Comments</h2>;
  }

  return (
    <>
      <section className="container">
        <CreateComment keyId={keyId} setComments={setComments} />
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </section>
    </>
  );
};
