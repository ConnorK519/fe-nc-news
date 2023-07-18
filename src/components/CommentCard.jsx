import "../App.css";
import dayjs from "dayjs";

export const CommentCard = ({ comment }) => {
  const written = dayjs(comment.created_at).format("dddd, MMMM D, YYYY");
  return (
    <>
      <section className="commentCard">
        <h2>{comment.author}</h2>
        <p className="dateMade">{written}</p>
        <p className="textSpacing">{comment.body}</p>
        <button className="votes">Vote: {comment.votes}</button>
      </section>
    </>
  );
};
