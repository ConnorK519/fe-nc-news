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
      <section className="info border">
        <form className="commentInputBox">
          {commentMessage && <h4>{commentMessage}</h4>}
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
          <button
            onClick={handleSubmit}
            disabled={newComment.length === 0 && !isBeingPosted ? true : false}
          >
            Post
          </button>
        </form>
      </section>
    </>
  );
};
