console.log("Tester");

//For Loop (initialisation ; condition ; afterthought)
for (let i = 0; i < 3; i++) {
  if (i < 2) {
    console.log(`This is iteraion: ${i + 1}`);
  } else {
    console.log(`This is the final iteration`);
  }
}

//While Loop
let max = 5;
let counter = 0;
let maxReached = false;

while (maxReached === false) {
  console.log(`You have not yet reached the maximum`);
  counter++;
  if (counter === max - 1) {
    maxReached = true;
    console.log("Max Reached");
  }
}

let continueLoop = true;
let i = 0;
while (continueLoop === true) {
  console.log(`Iteration: ${i}`);
  continueLoop = Math.random() < 0.1;
  i++;
}

//Traversing a loop  with an array - 'for' loop
const foods = ["Pizza", "Pasta", "Chocolate Cake", "Noodles", "Burger"];
for (let i = 0; i < foods.length; i++) {
  console.log(foods[i]);
}

//Traversing a loop  with an array - 'for...of' loop
for (let item of foods) {
  console.log(item);
}

//Traversing a loop  with an array - 'forEach()' method
//Anonymous function
foods.forEach(function (food) {
  console.log(food);
});

foods.forEach((food) => {
  console.log(food);
});
//The forEach array method also passes the array index to the anonymous function if we need to used it
//'forEach(function(newVariable, index))'
foods.forEach((food, index) => {
  console.log(`${index}: ${food}`);
});

let animals = ["Gifaffe", "Chimpanzee", "Parakeet", "Lemur", "Capybara"];
foods.forEach((animal, index) => {
  console.log(`${index}: ${animal}`);
});
