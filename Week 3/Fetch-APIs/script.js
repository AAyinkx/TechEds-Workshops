console.log("Tester");

//The async / await keywords are used so thatt out getFoxes function returns the actual data from the fetch request, instaed of giving us an immediate promise
//Tells the computer to wait until the data is ready before reading that function
//Our code usually synchronously with our browser; our getFoxes() function runs at the pace of the fetch request
//Getting a promise means that some part of our code needs to run asynchronously
async function getFoxes() {
  //We fetch to get the data from the API, we copy the url from the API
  const response = await fetch("https://randomfox.ca/floof");
  console.log(response);

  //We need to parse our response into JSON(JavaScript Object Notation) so we can manipulate the data

  //!We need await here too
  const data = await response.json();
  //json is a method that parses our reponse into JSON
  console.log(data);

  //fetching the image property from the API object
  const wrangledData = data.image;
  console.log(wrangledData);
  return wrangledData;
}
//Creating function that matches the API data to the image element
const mainContainer = document.getElementById("main-container");
//Pure function - it has one task
function createFoxes(foxUrl) {
  const newImage = document.createElement("img");

  newImage.src = foxUrl;
  newImage.alt = "A picture of a fox";
  mainContainer.appendChild(newImage);
}

//We need a function to call getFoxes() and createFoxes()
//Allows for more control over code
async function startUp() {
  const getFoxesData = await getFoxes(); // ensures that this always happend first
  createFoxes(getFoxesData);
}

startUp();
