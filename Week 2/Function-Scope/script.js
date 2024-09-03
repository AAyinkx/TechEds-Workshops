//Declaring a variable globally
const myName = "Hanifah";
console.log("Hello");

//Declaring a variable locally
function sayHelloLocal() {
  const name = "Barbara";
  console.log(`Hello ${name} !`);
}

//Using a Global variable within a function
function sayHelloGlobal() {
  console.log(`Hello ${myName} !`);
}

sayHelloLocal();
sayHelloGlobal();

// console.log(name);
//Output: Uncaught ReferenceError: name is not defined
//Out of scope
