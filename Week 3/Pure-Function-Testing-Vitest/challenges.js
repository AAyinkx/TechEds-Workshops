//If i write export before a function or variable i can use that function or variable in another JS file
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

//Anagrams = same letters different order
//!To Do:
//Check for same length
//sort
//check for same letters
//return true / false
//!Tests failed!  Need to remove spaces
//!Tests failed!  Need to makes sure it is the same case

export function isAnagram(string1, string2) {
  //.split() splits each character in the string an adds it to an array as an element
  //.sort() sorts and array

  //Converting strings to lowercase
  string1 = string1.toLowerCase();
  string2 = string2.toLowerCase();

  //Removing spaces from the string and putting them into an array
  let array1 = string1.split("");

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] == "") {
      array1.splice(i, 1);
    }
  }

  let array2 = string2.split("");

  for (let i = 0; i < array2.length; i++) {
    if (array2[i] == " ") {
      array2.splice(i, 1);
    }
  }
  //Splice will remove any space (starting index, how many elements to remove)

  //Can't be an anagram with different lenngth
  if (array1.length != array2.length) {
    return false;
  }
  //sorts the arrays alphabetically
  array1.sort();
  array2.sort();

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] != array2[i]) {
      return false;
    }
    return true;
    // If it passes all the tests it will return true
  }
}

//https://stackoverflow.com/questions/30912663/sort-a-string-alphabetically-using-a-function
//Useful resource for sorting strings
