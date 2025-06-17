function FizzBuzz(number) {
  //Creates Array fror the  numbers 1 --> Target Number
  let array1 = [];
  let array2 = [];
  //Creates Array fror the  numbers 1 --> Target Number
  for (let i = 1; i < number + 1; i++) {
    array1.push(i);
  }
  //Checks conditions for each number in array of numbers
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] % 5 === 0 && array1[i] % 3 === 0) {
      array2.push("FizzBuzz");
    } else if (array1[i] % 3 === 0) {
      array2.push("Fizz");
    } else if (array1[i] % 5 === 0) {
      array2.push("Buzz");
    } else {
      array2.push(array1[i].toString());
      //.toString() function converts to string
    }
    console.log(array1[i]);
  }
  //Returns FizzBuzz array
  return array2;
}
console.log(FizzBuzz(53));
//Modulus operator returns remainder
// e.g. 21 % 4 = 1
console.log(21 % 4);
