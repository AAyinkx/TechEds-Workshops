console.log("Tester");

const myButton = document.querySelector("button");

let clicks = 0;
function myButtonCounter() {
  clicks++;
  myButton.textContent = `You have clicked the button ${clicks} times`;
}

const countdownButton = document.getElementById("countdown");
let countdown = 10;
let show = false;

function myButtonCountDown() {
  countdownButton.textContent = `You have ${countdown} clicks remaining`;
  if (countdown > 1) {
    countdown--;
    countdownButton.textContent = `You have ${countdown} clicks remaining`;
  } else if (show === false) {
    countdownButton.textContent = `You have reached the maximum number of clicks`;
    document.body.style.backgroundColor = "red";
    const newImg = document.createElement("img");
    newImage(
      newImg,
      "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA1L3JtNjU3LTAyNi5wbmc.png",
      "Stop"
    );
    show = true;
  } else {
    countdownButton.textContent = `Cease CLICKING!`;
  }
}

function newImage(imageVariable, source, alt) {
  imageVariable.src = source;
  imageVariable.alt = alt;
  document.body.appendChild(imageVariable);
}

myButton.addEventListener("click", myButtonCounter);
countdownButton.addEventListener("click", myButtonCountDown);
