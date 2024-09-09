import { postComment } from "../api";
import { useContext, useState } from "react";
import "../App.css";
import { UserContext } from "../contexts/UserContext";

export const CreateComment = ({ keyId, setComments }) => {
  const [newComment, setNewComment] = useState("");
  const [commentMessage, setCommentMessage] = useState("");
  const [isBeingPosted, setIsBeingPosted] = useState(false);
  const { currentUser } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsBeingPosted(true);
    setCommentMessage("Comment is being posted...");
    postComment(keyId, newComment, currentUser)
      .then(({ createdComment }) => {
        setComments((currentComments) => {
          setNewComment("");
          setCommentMessage("");
          setIsBeingPosted(false);
          return [createdComment, ...currentComments];
        });
      })
      .catch((err) => {
        setIsBeingPosted(false);
        setCommentMessage("Failed to post comment");
      });
  };

  return (
    <>
      <section className="post-comment-card">
        <form>
          {commentMessage && <h4>{commentMessage}</h4>}
          <label className="comment-box-label" htmlFor="comment-input-box">
            Post a comment here:
          </label>
          <textarea
            placeholder="Enter your comment here..."
            className="comment-input-box"
            id="comment-input-box"
            value={newComment}
            onChange={(event) => {
              setNewComment(event.target.value);
            }}
          ></textarea>

          <button
            onClick={handleSubmit}
            disabled={newComment.length === 0 && !isBeingPosted ? true : false}
            className="post-comment-button"
          >
            Post
          </button>
        </form>
      </section>
    </>
  );
};
