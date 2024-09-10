console.log("Tester");
async function getMyStuffFromOverThere() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  console.log("HTTP Response:", response);
  const json = await response.json();
  console.log("JSON Data:", json);
}
getMyStuffFromOverThere();

//!.then() Notation
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then(function (response) {
//     console.log("HTTP Response:", response);
//     return response.json();
//   })
//   .then(function (json) {
//     console.log("JSON Data:", json);
//   });
const postsContainer = document.getElementById("posts-container");
function createPosts() {}
