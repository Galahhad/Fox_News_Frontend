import { initialState } from "../../initialState";
import { addCats } from "../../render/addCats";
export const getCats = () => {
  fetch("http://localhost:3000/categories")
  .then((res) => res.json())
  .then((cats) => {
    initialState.categories = cats;
    addCats();
  })
}