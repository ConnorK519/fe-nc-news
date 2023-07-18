import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://newnews-eiss.onrender.com/api",
});

export const getArticleInfo = () => {
  return newsApi.get("/articles");
};

export const getArticle = (key) => {
  return newsApi.get(`/articles/${key}`);
};

export const getArticleComments = (key) => {
  return newsApi.get(`/articles/${key}/comments`);
};
