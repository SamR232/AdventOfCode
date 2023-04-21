const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().split("\n");

let total = 0;

for (let i = 0; i < input.length; i += 1) {
  const pairs = input[i]
    .replace(/\D+/g, " ")
    .split(" ")
    .map((string) => Number(string));

  const overlap = pairs[1] < pairs[2] || pairs[0] > pairs[3];

  if (!overlap) {
    total += 1;
  }

  /* 7-9,5-7 overlaps in a single section, 7.
2-8,3-7 overlaps all of the sections 3 through 7.
6-6,4-6 overlaps in a single section, 6.
2-6,4-8 overlaps in sections 4, 5, and 6.
So, in this example, the number of overlapping assignment pairs is 4. */
}

console.log({
  total,
});
