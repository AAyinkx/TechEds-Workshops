console.log("Tester");

//setTimeout() is a method
//we need two arguments: task and the time in milliseconds
setTimeout(() => {
  console.log("I happen after one second, ONCE!");
}, 100);
//Callback function

function timeoutAction() {
  console.log("Hey, I am outside the timeout method!");
}
setTimeout(timeoutAction, 5000);

//setInterval() is a method
//We need two argumments: task and the time in milliseconds

setInterval(() => {
  console.log("I repeat myself every 3 seconds");
}, 3000);

//We can combine setInterval and setTimeout to clearInterval() ---> stop the interval

const myInterval = setInterval(() => {
  console.log("I repeat myself every 2 seconds");
}, 2000);

function stopTheIntervalPlease() {
  setTimeout(() => {
    //we need to tell the clearInterval method what interval we want to clear
    clearInterval(myInterval);
  }, 10000);
}
stopTheIntervalPlease();
