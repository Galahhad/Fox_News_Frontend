import { initialState } from "../initialState";
import { getNewsById } from "../queries/news/getNewsById";

export const addCatsNews = () => {
  const allNewsWrap = document.querySelector(".news_wrap");
  allNewsWrap.innerHTML = "";

  initialState.news.forEach((news) => {
    const catsNews = document.createElement("li");
    catsNews.classList.add("news_list");
    catsNews.textContent = news.title;

    catsNews.addEventListener("click", () => {
      getNewsById(news._id);
    })

    allNewsWrap.append(catsNews);
  })
}