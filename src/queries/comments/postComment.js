export const postComment = (id, input) => {

  const postInfo = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      text: input.value
    })
  }

  fetch(`http://localhost:3000/comment/news/${id}`, postInfo);
}