import { initialState } from "../../initialState";
import { addNews } from "../../render/addNews";
import { getCats } from "../categories/getCats";
export const getNews = () => {
  fetch("http://localhost:3000/news")
  .then((res) => res.json())
  .then((news) => {
    initialState.news = news;
    addNews();
    getCats();
  })
}