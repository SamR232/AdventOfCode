const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().split("\n");

/*
uppercase and lowercase are different items
Lowercase a - z have priorities 1 - 26.
Uppercase A - Z have priorities 27 - 52.
*/

const alphabet = ".abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};

let total = 0;

for (let i in input) {
  const stringLength = input[i].length;
  const halfStringLength = input[i].length / 2;

  const firstHalfArr = input[i].substring(0, halfStringLength).split("");
  const secondHalfArr = input[i]
    .substring(halfStringLength, stringLength)
    .split("");

  const filteredArray = firstHalfArr.filter((letter) =>
    secondHalfArr.includes(letter)
  );

  const duplicatesRemoved = removeDuplicates(filteredArray);

  for (let i in duplicatesRemoved) {
    total += alphabet.indexOf(duplicatesRemoved[i]);
  }
}

console.log({ total });
