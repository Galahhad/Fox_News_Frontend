import { initialState } from "../initialState";
import { getCatsNews } from "../queries/categories/getCatsNews";

export const addCats = () => {
  const catsWrap = document.querySelector(".categories_wrap");
  catsWrap.innerHTML = "";

  initialState.categories.forEach((cats) => {
    const catsTitle = document.createElement("li");
    catsTitle.textContent = cats.title;
    catsTitle.classList.add("cats_title");

    catsTitle.addEventListener("click", () => {
      getCatsNews(cats._id);
    })

    catsWrap.append(catsTitle);
  })

}