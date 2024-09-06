console.log("Tester");

const audioPlayer = document.getElementById("audio-player");

//Getting buttons by id
const playButton = document.querySelector("#play-button");
const pauseButton = document.querySelector("#pause-button");
const stopButton = document.querySelector("#stop-button");
const skipButton = document.querySelector("#skip-button");

//Play and pausue use built in Javacript Methods
//Play Button Event Handler
function playAudio() {
  audioPlayer.play();
}
//Play Button Event Listener
playButton.addEventListener("click", playAudio);

//Pause button Event Handler
function pauseAudio() {
  audioPlayer.pause();
}

//Pause Button Event Listener
pauseButton.addEventListener("click", pauseAudio);

//Stop Button Event Handler
function stopAudio() {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
}

//Stop Button Event Listener
stopButton.addEventListener("click", stopAudio);

//Skip by 3 seconds Event Handler
function skipAudio() {
  audioPlayer.currentTime += 3;
}
//Skip by 3 seconds Event Listener
skipButton.addEventListener("click", skipAudio);

const videoPlayer = document.getElementById("video-player");

//Getting buttons by id
const play_Video = document.querySelector("#play-video");
const pause_Video = document.querySelector("#pause-video");
const stop_Video = document.querySelector("#stop-video");
const skip_Video = document.querySelector("#skip-video");

//Play and pausue use built in Javacript Methods
//Play Button Event Handler
function playVideo() {
  videoPlayer.play();
}
//Play Button Event Listener
play_Video.addEventListener("click", playVideo);

//Pause button Event Handler
function pauseVideo() {
  videoPlayer.pause();
}

//Pause Button Event Listener
pause_Video.addEventListener("click", pauseVideo);

//Stop Button Event Handler
function stopVideo() {
  videoPlayer.pause();
  videoPlayer.currentTime = 0;
}

//Stop Button Event Listener
stop_Video.addEventListener("click", stopVideo);

//Skip by 3 seconds Event Handler
function skipVideo() {
  videoPlayer.currentTime += 3;
}
//Skip by 3 seconds Event Listener
skip_Video.addEventListener("click", skipVideo);
