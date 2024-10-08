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
    return <p>There are no Comments</p>;
  }

  return (
    <>
      <section>
        <div className="separator">
          <p className="separator-label">COMMENTS</p>
        </div>
        <CreateComment keyId={keyId} setComments={setComments} />
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </section>
    </>
  );
};
