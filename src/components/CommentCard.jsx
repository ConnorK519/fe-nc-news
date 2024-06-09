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
      <section className="info border">
        <div className="commentCard">
          {isError && <h2>{commentMsg}</h2>}
          {!isVisible && <h2>{commentMsg}</h2>}
          {isVisible ? (
            <>
              <h2>{comment.author}</h2>
              <p className="dateMade">{written}</p>
              <p className="textSpacing">{comment.body}</p>
              <p className="votes">Vote: {comment.votes}</p>
              {currentUser === comment.author && (
                <button onClick={handleDelete} className="deleteButton">
                  Delete Comment
                </button>
              )}
            </>
          ) : null}
        </div>
      </section>
    </>
  );
};
