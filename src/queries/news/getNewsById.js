import { initialState } from "../../initialState";
import { addNewsById } from "../../render/addNewsById";
import { getCommsByNews } from "../comments/getCommsByNews";
export const getNewsById = (id) => {
  fetch(`http://localhost:3000/news/${id}`)
  .then((res) => res.json())
  .then((news) => {
    initialState.news = news;
    addNewsById();
    getCommsByNews(id);
  });
}