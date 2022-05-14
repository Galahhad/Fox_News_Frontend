import {initialState} from "../../initialState";
import { addCommsByNews } from "../../render/addCommsByNews";
export const getCommsByNews = (id) => {
  fetch(`http://localhost:3000/comments/news/${id}`)
  .then((res) => res.json())
  .then((comments) => {
    initialState.comments = comments;
    addCommsByNews();
  });
}