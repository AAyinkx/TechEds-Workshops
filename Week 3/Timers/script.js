console.log("Tester");
const disappearButton = document.getElementById("disappear");
const message = document.getElementById("message");

function appear() {
  message.style.display = "block";
  setTimeout(() => {
    message.style.display = "none";
  }, 5000);
}

disappearButton.addEventListener("click", appear);

let start = 0; //Global counter in js
const timer = document.getElementById("timer"); //Cookie counter from html
const startStop = document.getElementById("start-stop");
const clear = document.getElementById("clear");
let timerTrue = false; //is the timer counting?

let timerCount = undefined; //timerCount need to be global so that clearInterval can stop it
function timerFunction() {
  //If the timer isn't counting...
  if (timerTrue == false) {
    //it will count
    //html timer = count timer
    timerCount = setInterval(() => {
      timer.innerHTML = start++;
      //cookiecounter.innerHTML += cookiespersecond
      //cookiecounter.innerHTML = cookiecounter + cookiespersecond
      console.log(timer.textContent);
    }, 1000);
    timerTrue = true; //timer true because it is now counting
  } else {
    //if the timer is counting already...
    clearInterval(timerCount); //stop it counting
    timerTrue = false; //timer false because it is not counting now
  }
}

//Reset button to take timer back to 0
function reset() {
  start = 0;
  timer.innerHTML = start;
  console.clear(); //Clears the console
}
startStop.addEventListener("click", timerFunction);
clear.addEventListener("click", reset);
