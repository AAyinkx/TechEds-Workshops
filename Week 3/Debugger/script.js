const exclamation = "Well done";
console.log(exclamation);

function countToFive() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
    // debugger; //this will stop the code from running and we will use the dev told to check
  }
}

countToFive();

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
    debugger;
    Countdown(startNum);
  } else {
    //End of funtion here. 1 returned
    return;
  }
}

//Countdown(5);
function countToHundered() {
  for (let i = 0; i < 100; i++) {
    console.log(i);
  }
}
countToHundered();
