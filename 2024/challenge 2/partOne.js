import { readFileSync } from "fs";
const input = readFileSync("./input.txt").toString().split("\n");

// The levels are either all increasing or all decreasing.

// const input = ["19 21 23 24 26 28 29"];
// const input = ["18 21 22 24 26 28 29", "20 19 18 17 16 15 14"];

const isArrayAscending = (arr) => {
  const sortedArr = [...arr].sort((a, b) => a - b);
  return arr.every((value, index) => value === sortedArr[index]);
};

const isArrayDescending = (arr) => {
  const sortedArr = [...arr].sort((a, b) => b - a);
  return arr.every((value, index) => value === sortedArr[index]);
};

let total = 0;

input.forEach((level) => {
  const currentNumbers = level.split(" ").map((string) => Number(string));

  const isArrayAscendingResponse = isArrayAscending(currentNumbers);
  const isArrayDescendingResponse = isArrayDescending(currentNumbers);

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
