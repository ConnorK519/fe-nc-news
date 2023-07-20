import { postComment } from "../api";
import { useState } from "react";
import "../App.css";

export const CreateComment = ({ keyId, setComments }) => {
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(keyId, newComment).then(({ createdComment }) => {
      setComments((currentComments) => {
        setNewComment("");
        return [createdComment, ...currentComments];
      });
    });
  };

  return (
    <>
      <form className="commentInputBox">
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
        <button onClick={handleSubmit}>Post</button>
      </form>
    </>
  );
};
