console.log("Tester");

//let's log the document in the console
console.log(document);

//if your console is showing the document elements, use console.dir to see the list fo properties
console.dir(document);

const maincontainer = document.getElementById("container1");

console.log(maincontainer);

//Selecting elements with 'querySelector'
const body = document.querySelector("body");
console.log(body);

const h1 = document.querySelector("h1");
console.log(h1);

//Modifying elements
h1.textContent = "THE DOM 2.0";

//Adding elements
const newImg = document.createElement("img");
console.log(newImg);

newImg.src =
  "https://images.immediate.co.uk/production/volatile/sites/10/2018/03/2048x1365-Best-strawberries-to-grow-LI1834878-9b05a14.jpg?quality=90&crop=9px,11px,2031px,1354px&resize=940,627";
newImg.alt = "strawberries";
newImg.className = "main-image";

//Appending (adding) the image to the container
maincontainer.appendChild(newImg);

const p = document.querySelector("p");
p.remove();

document.body.style.backgroundColor = "green";
