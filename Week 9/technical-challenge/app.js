function CreateNumber(Array) {
  //Creates empty array for the new phone number
  let phoneNumber = [];
  //Pushes the first opening bracket
  phoneNumber.push("(");
  for (let i = 0; i < Array.length; i++) {
    //Based on the position of the number in the  array, certain characters will also be pushed either before or after the character
    if (i == 2) {
      phoneNumber.push(Array[i]);
      phoneNumber.push(")");
      phoneNumber.push(" ");
    } else if (i == 5) {
      phoneNumber.push(Array[i]);
      phoneNumber.push("-");
    } else if (i > 9) {
      phoneNumber = phoneNumber; //Stops adding anything when the index is higher than 9 (10 numbers)
    } else {
      phoneNumber.push(Array[i]);
    }
  }
  //Joins the phone number with no spaces
  return phoneNumber.join("");
}

function CreateNumber2(Array) {
  Array.splice(0, 0, "(");
  Array.splice(4, 0, ")");
  Array.splice(5, 0, " ");
  Array.splice(9, 0, "-");
  Array.splice(14, 50); //Removes anything after 14 charcters = 10 characters + (,), ,-
  return Array.join("");
}
console.log(CreateNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14, 15]));
console.log(CreateNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14, 15]));
console.log("Hello");
