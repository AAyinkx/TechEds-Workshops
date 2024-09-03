//Callback functions = functions that take other functions as arguments
function notifyUser() {
  console.log("This Function was called");
}

function newFunction(notifyUserCallback) {
  console.log("Running this function.....");
  notifyUserCallback(); //Running the function that we passed
}
//we don't use () when we pass as an argument
newFunction(notifyUser);

//Anonymous function callback
function newAwesomeFunction(onCompleteCallback) {
  console.log("Running complex tasks...");
  onCompleteCallback();
}
//Creates new function as a parameter. One-use function for this one instance that we are running it
newAwesomeFunction(function () {
  console.log(
    "Notify user function was called! Immediately! Anonymous Callback"
  );
});

//Alternative way to write Anonymous function
// function == ()=>
newAwesomeFunction(() => {
  console.log(
    "Notify user function was called! Immediately! Anonymous Callback! Alternative Method"
  );
});

function myComplexFunction(onSuccessCallback, onFailureCallback) {
  console.log("Running Complex Function... doing COMPLEX tasks...");
  console.log("COMPLEX task complete. I will notify the user");

  // randomly choose if success is true or false
  const success = Math.random() > 0.5; //Returns true or false
  console.log(success);

  //If true...
  if (success) {
    onSuccessCallback({
      message: "This is the message of success", //message is a property of 'data'which is an object
    });
  } else {
    onFailureCallback();
  }
}
//Creating seperate functiions
function onAwesomeSuccess(data) {
  console.log("It was successful: ", data.message);
}

function onAwesomeFailure() {
  console.log("It failed :(");
}
//Calling function with other functions as parameters
myComplexFunction(onAwesomeSuccess, onAwesomeFailure);

//Written as an anonymous function
myComplexFunction(
  (data) => {
    console.log("It was successful: ", data.message);
  },
  () => {
    console.log("It failed :(");
  }
);

//Calculator
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function myCalculatorFunction(a, b, operationCallback) {
  console.log("Doing a calculation using the numbers: ", a, b);

  return operationCallback(a, b);
}

const result = myCalculatorFunction(1, 2, multiply);
console.log(result);

//Playing around with recursion whereby the function calls itself
//Requirement: Base case/ stopping condition, must return something
function Countdown(startNum) {
  //Display count
  console.log(startNum);
  //Stopping condition
  if (startNum > 1) {
    //Decrease number by one
    startNum--;
    //Funtion calls itself with new value reduced by 1
    Countdown(startNum);
  } else {
    //End of funtion here. 1 returned
    return;
  }
}

Countdown(5);
