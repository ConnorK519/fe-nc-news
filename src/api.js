import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://newnews-eiss.onrender.com/api",
});

export const getArticleInfo = () => {
  return newsApi.get("/articles").then(({ data: { articles } }) => {
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

export const postComment = (key, text) => {
  const newComment = {
    author: "jessjelly",
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
