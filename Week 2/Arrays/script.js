console.log("Tester");
const names = [
  "Hanifah",
  "Sarah",
  "Khadijah",
  "Mariam",
  "Sam",
  "Bethany",
  "Eric",
];
console.log(names);
console.log(names[3]);
console.log(names.length); //returns length of array
console.log(names[0]); //indexed from one

//Array methods
//with the help of: https://dev.to/devsmitra/28-javascript-array-hacks-a-cheat-sheet-for-developer-5769
//Array.indexOf() - returns the index of an element in the array
console.log(names.indexOf("Sarah"));
//Array.includes() - Returns true or false if an element is in the array
console.log(names.includes("Harper")); //False
console.log(names.includes("Mariam")); //True
//Array.pop() - Removes the last element from an array and returns that element.Like the stack data structure
console.log(names.pop());
//Array.push() - Appends new elements to the end of an array, and returns the new length. Like the stack data structure
console.log(names.push("Joe"));
//Array.shift() - Removes the first element from an array and returns that element.
console.log(names.shift());
//Array.unshift() - Adds new elements to the beginning of an array, and returns the new length.
console.log(names.unshift("Margo"));
//Array.splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
//Array.join() - Joins all elements of an array into a string.
console.log(names.join(", "));
//Array.sort() - Sorts the elements of an array in place and returns the array. The default sort order is according to string Unicode code points.
console.log(names.sort());
//Array.map() - Returns a new array with the results of calling a provided function on every element in this array.
console.log(names.map((el) => "Clones"));
//Array.splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
console.log(names.splice(3, 4));
