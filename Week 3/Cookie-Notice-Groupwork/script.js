console.log("Tester");

const declineButton = document.getElementById("decline");
const acceptButton = document.getElementById("accept");
const cookieNotice = document.getElementById("cookie-notice");

declineButton.addEventListener("click", () => {
  console.log("Declined");
});
acceptButton.addEventListener("click", () => {
  console.log("Accepted!");
});

acceptButton.addEventListener("click", () => {
  document.cookie = "cookiesAccepted=true";
});

const cookiesAccepted = document.cookie.includes("cookiesAccepted");
console.log(cookiesAccepted);
if (!cookiesAccepted) {
  cookieNotice.style.display = "block";
}

declineButton.addEventListener("click", () => {
  cookieNotice.style.display = "none";
  document.cookie = "cookiesAccepted=false";
});

acceptButton.addEventListener("click", () => {
  cookieNotice.style.display = "none";
  document.cookie = "cookiesAccepted=true";
});
