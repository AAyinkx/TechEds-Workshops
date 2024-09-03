//Calculator functions
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

function calculateFunction(a, b, operator) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  } else {
    return "That isn't a valid operator";
  }
}

//Switch-Case
//Alternative to if statements
function calculateSwitch(a, b, operator) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return "That isn't a valid operator";
  }
}

//Testing both calculator functions
console.log(calculateFunction(4, 5, "+"));
console.log(calculateSwitch(4, 5, "+"));

console.log(calculateFunction(4, 5, "*"));
console.log(calculateSwitch(4, 5, "*"));

console.log(calculateFunction(4, 5, "/"));
console.log(calculateSwitch(4, 5, "/"));

console.log(calculateFunction(4, 5, "-"));
console.log(calculateSwitch(4, 5, "-"));

console.log(calculateFunction(4, 5, "h"));
console.log(calculateSwitch(4, 5, "h"));
