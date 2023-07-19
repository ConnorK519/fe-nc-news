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
