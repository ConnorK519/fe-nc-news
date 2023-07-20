import { postComment } from "../api";
import { useState } from "react";
import "../App.css";

export const CreateComment = ({ keyId, setComments }) => {
  const [newComment, setNewComment] = useState("");
  const [commentError, setCommentError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(keyId, newComment)
      .then(({ createdComment }) => {
        setComments((currentComments) => {
          setNewComment("");
          setCommentError("");
          return [createdComment, ...currentComments];
        });
      })
      .catch((err) => {
        setCommentError("Failed to post comment");
      });
  };

  return (
    <>
      <form className="commentInputBox">
        {commentError && <h4>{commentError}</h4>}
        <label>
          Post a comment here:
          <textarea
            placeholder="Enter your comment here..."
            className="commentInput"
            value={newComment}
            onChange={(event) => {
              setNewComment(event.target.value);
            }}
          ></textarea>
        </label>
        <button onClick={handleSubmit} disabled={newComment.length === 0}>
          Post
        </button>
      </form>
    </>
  );
};
