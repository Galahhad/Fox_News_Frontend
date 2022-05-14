import { initialState } from "../initialState";
import { postComment } from "../queries/comments/postComment";

export const addNewsById = () => {
  const newsById = document.querySelector(".news_wrap");
  newsById.textContent = "";

  const newsIdTitle = document.createElement("li");
  newsIdTitle.textContent = initialState.news.title;
  newsIdTitle.classList.add("news_id_title");

  const newsIdText = document.createElement("li");
  newsIdText.textContent = initialState.news.text;
  newsIdText.classList.add("news_id_text");

  const postForm = document.createElement("form");
  postForm.classList.add("post_form");

  const commInput = document.createElement("input");
  commInput.classList.add("comm_input");
  commInput.placeholder = "Добавьте комментарий";
  
  const commButton = document.createElement("button");
  commButton.classList.add("comm_button");
  commButton.textContent = "Add";

  postForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (commInput.value.startsWith(" ")) {
      commInput.value = "";
    }else {
      postComment(initialState.news._id, commInput);
      commInput.value = "";
    }

  })

  newsById.append(newsIdTitle, newsIdText);
  newsIdText.after(postForm);
  postForm.append(commInput, commButton);
}
