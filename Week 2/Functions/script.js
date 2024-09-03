console.log("Tester");

function sayHello() {
  console.log("Hello");
}
sayHello();

//Parameter = username
function Greeting(username) {
  console.log(`Hello ${username}`);
}

//Argument = "Hanifah", "User"
Greeting("Hanifah");
Greeting("User");

//'username' scope is local so we can use the same parameter name in two different functions
function MorningGreeting(username) {
  console.log(`Good Morning ${username}`);
}

//Argument = "Hanifah", "User"
MorningGreeting("Hanifah");
MorningGreeting("User");
