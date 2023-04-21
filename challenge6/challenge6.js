const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split("\n").toString();

for (let i = 0; i < input.length; i++) {
  const letters = [input[i], input[i + 1], input[i + 2], input[i + 3]];

  if (letters.length === new Set(letters).size) {
    console.log(letters);
    console.log(i + 4);
    break;
  }
}
