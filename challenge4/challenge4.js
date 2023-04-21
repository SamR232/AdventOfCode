const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().split("\n");

let total = 0;

for (let i = 0; i < input.length; i++) {
  const pairs = input[i]
    .replace(/\D+/g, " ")
    .split(" ")
    .map((string) => Number(string));

  if (pairs[0] === pairs[2] || pairs[1] === pairs[3]) {
    total += 1;
  } else if (pairs[0] > pairs[2] && pairs[1] < pairs[3]) {
    total += 1;
  } else if (pairs[2] > pairs[0] && pairs[3] < pairs[1]) {
    total += 1;
  }
  console.log({
    pairs,
    total,
  });
}
