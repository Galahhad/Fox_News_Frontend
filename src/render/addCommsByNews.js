import { initialState } from "../initialState";

export const addCommsByNews = () => {
  const newsWrap = document.querySelector(".news_wrap");

  const commWrap = document.createElement("ul");
  commWrap.classList.add("comm_wrap");

  initialState.comments.forEach((comments) => {

    const commList = document.createElement("li");
    commList.classList.add("comm_list");
    commList.textContent = comments.text;

    newsWrap.append(commWrap);
    commWrap.prepend(commList);
  })
}
