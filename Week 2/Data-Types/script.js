console.log("Testing, testing, 1, 2, 3");
let number = 5;
console.log(number);

let chocolateCake = 7;
let raspberryPie = 15;
let CakeTotal = 7 + 15;
// '=' assignment operator

console.log(CakeTotal);

let firstName = "Hanifah";
let lastName = "Afinowi";

//Template literals defined by '`'
//Allows quotations and double quotations to be used inside a string
console.log(`My name is ${firstName} ${lastName}`);
//${} (string literals) can be used to let computer know these aren't part of the string. Alternatie to '+'

let isTrue = true;
console.log(isTrue);
let isFalse = false;
console.log(isFalse);

console.log(typeof isFalse);
//typeof operator used to find out the data type of a variable
console.log(typeof firstName);
console.log(typeof CakeTotal);

//Undefined data type and value
let name;

//Value has purposefully been left blank
let age = null;

//Comparisions
let a = 9;
let b = 8;
let c = "34";
let isAGreaterThanB = a > b;
let isALessThanB = a < b;
let isAEqualToC = a === c; //'===' compares the value and data type. Both have to be true to return true

console.log(isAGreaterThanB);
console.log(isALessThanB);
console.log(isAEqualToC);

let favourite = "Chocolate Cake";
const sentence = `My name is ${firstName} and my favourite cake is ${favourite}`;
console.log(sentence);
