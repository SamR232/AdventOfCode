const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split("\n");

const testData = [
  `Card 1: 41 48 83 86 17 | 83 86 631 17 9 48 53`,
  //   `Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19`,
  //   `Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14 1`,
  //   `Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83`,
  //   `Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36`,
  //   `Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`,
];

testData.forEach((scratchcard) => {
  // Remove Game 1:
  scratchcard = scratchcard.split(":");
  // Select only the numbers
  scratchcard = scratchcard[1];
  // Split current and winning numbers
  scratchcard = scratchcard.split("|");
  const winningNumbers = scratchcard[0].split(" ");
  const myNumbers = scratchcard[1].split(" ");

  const matchingNumbers = winningNumbers.map((winningNumber) => {
    myNumbers.forEach((myNumber) => {
      console.log({ winningNumber, myNumber });
      if (!winningNumber || !myNumber) return;

      if (myNumber === winningNumber) {
        return myNumber;
      }
    });
  });
  console.log({ matchingNumbers });
});
