console.log("Tester");
const form = document.querySelector("form");

//Adding an event listner for our form

//event handler
function handleSubmit(event) {
  //preventing the default behavior of the submit event which would be to add the information to the url
  event.preventDefault();

  //creating an object to store data from the input
  //very similar to constructor methods in C#
  //uses the keyword 'new'
  //CAPITAL LETTER after 'new' is Essential
  const formData = new FormData(form);
  //   console.log(formData);
  console.table(formData); //Presents the data differently
  //form Values is collected form data entries
  const formValues = Object.fromEntries(formData);
  console.log(formValues);
}

//event listner
form.addEventListener("submit", handleSubmit);
