const fs = require("fs");

const input = fs.readFileSync("input.txt").toString().split("\n");

// Rock = 1, Paper = 2, Scissors = 3
// Lose = 0, Draw = 3, Win = 6
const againstRockPoints = {
  Lose: 3,
  Draw: 4,
  Win: 8,
};

const againstPaperPoints = {
  Lose: 1,
  Draw: 5,
  Win: 9,
};
const againstScissorPoints = {
  Lose: 2,
  Draw: 6,
  Win: 7,
};

const letterConverter = {
  A: "Rock",
  B: "Paper",
  C: "Scissors",
  X: "Lose",
  Y: "Draw",
  Z: "Win",
};

let points = 0;

for (let i = 0; i < input.length; i += 1) {
  const elfChoice = input[i][0];
  const myChoice = input[i][2];

  const convertedElfChoice = letterConverter[elfChoice];
  const myChoiceResult = letterConverter[myChoice];

  if (convertedElfChoice === "Rock") {
    points += againstRockPoints[myChoiceResult];
  } else if (convertedElfChoice === "Paper") {
    points += againstPaperPoints[myChoiceResult];
  } else if (convertedElfChoice === "Scissors") {
    points += againstScissorPoints[myChoiceResult];
  }
}

console.log({ points });
