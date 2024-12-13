import { readFileSync } from "fs";
const input = readFileSync("./input.txt").toString().split("\n");

// The levels are either all increasing or all decreasing.

// const input = ["20 24 23 24 26 28 29"];
// const input2 = ["29 28 26 24 23 24 20"];
// const input = ["18 21 22 24 26 28 29", "20 19 18 17 16 15 14"];

const isArrayAscending = (arr) => {
  const sortedArr = [...arr].sort((a, b) => a - b);
  return arr.findIndex((value, index) => value !== sortedArr[index]);
};

const isArrayDescending = (arr) => {
  const sortedArr = [...arr].sort((a, b) => b - a);
  return arr.findIndex((value, index) => value !== sortedArr[index]);
};

let total = 0;

input.forEach((level) => {
  const currentNumbers = level.split(" ").map((string) => Number(string));

  const isArrayAscendingResponse = isArrayAscending(currentNumbers);
  const isArrayDescendingResponse = isArrayDescending(currentNumbers);

  // if one is -1 and other is greater, report safe
  // if both -1. you've broken numbers
  // if both greater than -1, report unsafe

  if (isArrayAscendingResponse >= 0 && isArrayDescendingResponse >= 0) {
    currentNumbers.splice(isArrayAscendingResponse, 1);
  }

  const isArrayAscendingResponse2 = isArrayAscending(currentNumbers);

  if (isArrayDescendingResponse > -1) {
    currentNumbers.splice(isArrayDescendingResponse, 1);
  }

  console.log({ isArrayAscendingResponse, isArrayDescendingResponse });

  if (!isArrayAscendingResponse && !isArrayDescendingResponse) return;

  const safe = [];
  currentNumbers.forEach((currNumber, index) => {
    if (index === 0) return;
    const difference = currNumber - currentNumbers[index - 1];
    const posDifference = Math.abs(difference);
    if (posDifference < 1 || posDifference > 3) {
      safe.push(-1);
      return;
    }
    safe.push(currNumber);
  });
  console.log({ safe });

  if (!safe.includes(-1)) {
    total += 1;
  }
});

console.log({ total });
