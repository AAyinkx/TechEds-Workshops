document.body.style.backgroundColor = "#FF4D4D";
const form = document.querySelector("form");

//!Workshop way
//Listening for the form event
function handleSubmit(event) {
  //preventing the default behavior of the submit event which would be to add the information to the url
  event.preventDefault();
  const formData = new FormData(form);
  //Here we are saving the input daata with the name "food"
  const colour = formData.get("colour");
  //We don't need to stringify the data here because we are collection a string value
  localStorage.setItem("colour", colour);
}

//!As done in the demo on Monday
function handleSubmit2(event) {
  event.preventDefault();

  //creating an object to store data from the input
  //very similar to constructor methods in C#
  //uses the keyword 'new'
  //CAPITAL LETTER after 'new' is Essential
  const formData = new FormData(form);

  //form Values is collected form data entries
  const formValues = Object.fromEntries(formData);
  console.log(formValues);

  //We need to stringify the form values
  const stringifiedForm = JSON.stringify(formValues);

  //We can now save it to local storage
  localStorage.setItem("colour", stringifiedForm);
}
form.addEventListener("submit", handleSubmit2);

const colour = localStorage.getItem("colour");
const parsedColour = JSON.parse(colour);

//if colour returns true
if (parsedColour) {
  const input = document.querySelector("input");
  input.value = parsedColour.colour;
}

function loadColour() {
  //get the colour from local storage on page reload
  //we are getting the item and parsing it in one go, instead of two steps
  const parsedColour = JSON.parse(localStorage.getItem("colour"));
  if (parsedColour) {
    const input = document.querySelector("input");
    //I have changed the value of the input to be the colour property in the parsedColour object
    input.value = parsedColour.colour || "#000000";
    const body = document.querySelector("body");
    //whatever colour we save in local storage will be applied to the body tag
    body.style.color = parsedColour.colour || "#000000";
  }
}
loadColour();

//!We can also remove data from local storage
const clearButton = document.getElementById("clear");

function clearColour() {
  localStorage.removeItem("colour");

  const defaults = {
    colour: "#000000",
  };

  document.body.style.color = defaults.colour;
}
clearButton.addEventListener("click", clearColour);
