console.log("Tester");
document.body.style.backgroundColor = "midnightblue";
const h1 = document.createElement("h1");

let age = 1;
let movieRating = "PG";

if (movieRating === "18" && age >= 18) {
  console.log("You can watch this movie");
} else if (movieRating === "15" && age >= 15) {
  console.log("You can watch this movie");
} else if (movieRating === "12" && age >= 12) {
  console.log("You can watch this movie");
} else if (movieRating === "PG" && age < 12) {
  console.log("You can watch this movie with parental Guidance");
} else if (movieRating === "U") {
  console.log("You can watch this movie ");
} else {
  console.log("You CANNOT watch this movie");
}
