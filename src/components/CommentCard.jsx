import "../App.css";
import dayjs from "dayjs";
import { UserContext } from "../contexts/UserContext";
import { useContext, useState } from "react";
import { deleteComment } from "../api";

export const CommentCard = ({ comment }) => {
  const written = dayjs(comment.created_at).format("dddd, MMMM D, YYYY");
  const { currentUser } = useContext(UserContext);
  const [isVisible, setIsVisible] = useState(true);
  const [commentMsg, setCommentMsg] = useState("");
  const [isError, setIsError] = useState(false);
  const [originalVotes, setOriginalVotes] = useState(comment.votes);

  const handleDelete = (event) => {
    setIsVisible(false);
    setCommentMsg("Your Comment is being deleted...");
    deleteComment(comment.comment_id)
      .then((status) => {
        setIsError(false);
        setCommentMsg("Your Comment has been deleted");
      })
      .catch((err) => {
        setIsError(true);
        setCommentMsg("An Error Occurred while trying to delete the comment");
        setIsVisible(true);
      });
  };

  return (
    <>
      <div className="comment-card">
        {isError && <p>{commentMsg}</p>}
        {!isVisible && <p>{commentMsg}</p>}
        {isVisible ? (
          <>
            <div className="comment-header">
              <p className="comment-author">{comment.author}</p>
              <p className="comment-date">{written}</p>
            </div>
            <p className="comment-body">{comment.body}</p>
            <div className="votes-box">
              {/* {voteError && <p>{voteError}</p>} */}
              <button
                // onClick={() => handleClick(1)}
                disabled={true}
                // className={userVote > 0 ? voteConfirm : ""}
              >
                👍
              </button>
              <p className="votes">{originalVotes}</p>
              <button
                // onClick={() => handleClick(-1)}
                disabled={true}
                // className={userVote < 0 ? voteConfirm : ""}
              >
                👎
              </button>
            </div>
            {currentUser === comment.author && (
              <button onClick={handleDelete} className="deleteButton">
                Delete Comment
              </button>
            )}
          </>
        ) : null}
      </div>
    </>
  );
};
