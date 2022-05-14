import { initialState } from "../initialState";
import { getNewsById } from "../queries/news/getNewsById";
import { addNewsById } from "./addNewsById";

export const addNews = () => {
  const newsWrap = document.querySelector(".news_wrap");
  newsWrap.innerHTML = "";

  if(Array.isArray(initialState.news)) {
    initialState.news.forEach((news) => {
      const newsList = document.createElement("li");
      newsList.classList.add("news_list");
      newsList.textContent = news.title;

      newsList.addEventListener("click", () => {
        getNewsById(news._id);
      })
  
      newsWrap.append(newsList);
    })
  } else {
    addNewsById();
  }

}