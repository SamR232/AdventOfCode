const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split("\n").toString();

for (let i = 0; i < input.length; i++) {
  const letters = [
    input[i],
    input[i + 1],
    input[i + 2],
    input[i + 3],
    input[i + 4],
    input[i + 5],
    input[i + 6],
    input[i + 7],
    input[i + 8],
    input[i + 9],
    input[i + 10],
    input[i + 11],
    input[i + 12],
    input[i + 13],
  ];

  if (letters.length === new Set(letters).size) {
    console.log(letters);
    console.log(i + 14);
    break;
  }
}
