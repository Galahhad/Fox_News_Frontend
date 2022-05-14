import { initialState } from "../../initialState"
import { addCatsNews } from "../../render/addCatsNews";

export const getCatsNews = (id) => {
  fetch(`http://localhost:3000/news/category/${id}`)
  .then((res) => res.json())
  .then((news) => {
    initialState.news = news;
    addCatsNews();
  })
}