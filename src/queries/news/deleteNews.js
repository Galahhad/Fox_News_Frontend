export const deleteNews = (id) => {
  const deleteInfo = {
    method: "DELETE"
  }

  fetch(`http://localhost:3000/news/${id}`, deleteInfo);
}
