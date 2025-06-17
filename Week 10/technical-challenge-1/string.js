function Solution(str) {
  let pairs = [];
  let removedSpaces = str.split(" ").join("");

  if (removedSpaces.length % 2 != 0) {
    removedSpaces += "_";
  }

  for (let i = 0; i < removedSpaces.length; i = i + 2) {
    pairs.push(removedSpaces.slice(i, i + 2).toString());
  }
  return pairs;
}
function duplicateEncode(word) {
  let value = "";
  let removedSpaces = word.split(" ").join("");
  removedSpaces = removedSpaces.toLowerCase();
  for (let i = 0; i < removedSpaces.length; i++) {
    let char = i;
    if (removedSpaces.filter((x) => x == 2) > 1) {
      value += ")";
    } else {
      value += "(";
    }
  }
  // ...
  return value;
}
console.log(Solution("abcde"));
console.log(duplicateEncode("din"));
