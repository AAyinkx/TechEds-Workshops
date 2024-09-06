//Declaring Objects
const profile = {
  name: "Hanifah",
  age: 19,
  favouriteSport: "Netball",
};

//Accessing properties in objects
console.log(profile);
console.log(profile.favouriteSport);
console.log(profile.age);

//Adding properties to exisiting Objects
profile.familyMembers = 7;
console.log(profile.familyMembers);

const car = {
  make: "Toyota",
  model: "Yaris",
  colour: "Red",
};

console.log(`I have a ${car.colour} car. It is a ${car.make} ${car.model}`);

const book = {
  title: "Frankenstein",
  author: "Mary Shelley",
  edition: 1818,
  pages: 258,
  rating: "5*",
};
console.log(
  `My favourite book is ${book.title} by ${book.author}. It is the ${book.edition} edition. It is ${book.pages} pages long and I gave it ${book.rating}s`
);
