const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().split("\n");

const accumulateTopValues = (array, number) => {
  array
    .sort(function (a, b) {
      return b - a; // if b is bigger than a, sort a before b (if positive numbers)
    })
    .slice(0, number)
    .reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);
};

let total = 0;
let highest = 0;
const combinedCalorieArray = [];

for (let i = 0; i < input.length; i += 1) {
  if (input[i].length > 0) {
    total += Number(input[i]);
  } else if (total > highest) {
    combinedCalorieArray.push(total);
    highest = total;
    total = 0;
  } else {
    combinedCalorieArray.push(total);
    total = 0;
  }
}

const sumHighestThreeValues = accumulateTopValues(combinedCalorieArray, 3);

console.log({ sumHighestThreeValues });
