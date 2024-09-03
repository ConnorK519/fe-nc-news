import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://newnews-eiss.onrender.com/api",
});

export const getArticleInfo = (sort_by, order, topic, page) => {
  const params = { sort_by, order, topic, page, limit: 10 };
  return newsApi.get("/articles", { params }).then(({ data: { articles } }) => {
    return articles;
  });
};

export const getArticle = (key) => {
  return newsApi.get(`/articles/${key}`).then(({ data: { article } }) => {
    return article;
  });
};

export const getArticleComments = (key) => {
  return newsApi
    .get(`/articles/${key}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const postComment = (key, text, user) => {
  const newComment = {
    author: user || "grumpy19",
    body: text,
  };
  return newsApi
    .post(`/articles/${key}/comments`, newComment)
    .then(({ data: createdComment }) => {
      return createdComment;
    });
};

export const patchArticle = (article_id, vote) => {
  return newsApi
    .patch(`/articles/${article_id}`, { votes: vote })
    .then(({ data: { article } }) => {
      return article;
    });
};

export const getUsers = () => {
  return newsApi.get("/users").then(({ data: users }) => {
    return users;
  });
};

export const deleteComment = (comment_id) => {
  return newsApi.delete(`/comments/${comment_id}`).then(({ status }) => {
    return status;
  });
};

export const getTopics = () => {
  return newsApi.get(`/topics`).then(({ data: { topics } }) => {
    return topics;
  });
};
