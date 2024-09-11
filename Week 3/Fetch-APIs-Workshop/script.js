console.log("Tester");
async function getMyStuffFromOverThere() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  console.log(response);
  const data = await response.json();
  console.log(data);
  //data wrangling happens here, if necessary

  //I need to return the data, so it is available to the rest of my functions
  return data;
}

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

function createPosts(titleContent, bodyContent) {
  const title = document.createElement("h2");
  const body = document.createElement("p");

  title.textContent = titleContent;
  body.textContent = bodyContent;

  postsContainer.appendChild(title);
  postsContainer.appendChild(body);
}

//I am going to make a function that matches the fetched data with the DOM elements I created
async function displayPosts() {
  const postsData = await getMyStuffFromOverThere();

  //in this case, it's more convenient to do the data wrangling here
  //I have added a forEach loop method to run through the array of objects and post each of them on the page
  postsData.forEach(function (post) {
    createPosts(post.title, post.body);
  });
}

displayPosts();
