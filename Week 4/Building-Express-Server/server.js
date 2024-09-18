//!STEP 1: npm init -y
//!STEP 2: npm i express
//!STEP 3: .gitignore for node_modules
//!STEP 4: create a server.js to add the server set-up
//!STEP 5:  "type": "module" in the package.json

//We need to import the express folder, not just one element - no destructuring needed
import express from "express";

//I need to initalise my express server. I have acces to the powers of express

const app = express();

//I am going to tell my server to use JSON data
//For express, translate it to JSON data
app.use(express.json());

//We need to set up a PORT to host our server e.g.
//GoLive = 550
//Vite = 5173
//We can choose any port for our server
//I need two arguments: first one is the PORT number, second argument is a function to check that the PORT is working
app.listen(8081, () => {
  console.log("Server is running on port 8080");
});

//We are going to write an endpoint for our root route
//We are going to write a url that we can navigate to to see our server
//We will have different endpoints to perform different tasks
//The GET method allows us to read data, so in this endpoint, the task is to read data
//The endpoint methods need two arguments: first argument is the endpoint, and the second argument is a function to perform the task
//Our anonymous callback function needs two parameters: request, response
//Your root route should always be for testing purposes

app.get("/", (request, response) => {
  //at the moment, we are not expecting a request, so the parameter request has no use yet
  response.json({ message: "Hello. Welcome to my root route" });
});

//GET endpoint to read data
app.get("/personalInfo", (request, response) => {
  //we will use the request parameter to request data to the database
  //we will use the response to send the data to the client
  response.json([
    { message: "Database info received" },
    { message: "Another message " },
  ]);
});

//We can write a POST endpoint to add new data to the database
//browsers can only GET (read) data, so we need a different tool to test this endpoint --> Thunder Client or Postman

app.post("/addNewData", (req, res) => {
  //receive the data from the client
  //we are going to add the data to the database
  //here we are using the body property inside our request and we are sending the body data as a response
  res.json({ message: "Form received and added to database" });
});
