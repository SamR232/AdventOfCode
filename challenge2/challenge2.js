const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().split("\n");

// Rock = 1, Paper = 2, Scissors = 3
// 0 = Lose, 3  = Draw, and 6 = Win (Points)

const rockPointsConverter = {
  1: 3,
  2: 6,
  3: 0,
};
const paperPointsConverter = {
  1: 0,
  2: 3,
  3: 6,
};
const scissorPointsConverter = {
  1: 6,
  2: 0,
  3: 3,
};

const letterConverter = {
  A: "Rock",
  B: "Paper",
  C: "Scissors",
  X: "Rock",
  Y: "Paper",
  Z: "Scissors",
};

const letterToPointsConverter = {
  Rock: 1,
  Paper: 2,
  Scissors: 3,
};

let points = 0;

for (let i = 0; i < input.length; i += 1) {
  const elfChoice = input[i][0];
  const myChoice = input[i][2];

  const convertedElfChoice = letterConverter[elfChoice];
  const convertedMyChoice = letterConverter[myChoice];
  const myChoiceInPoints = letterToPointsConverter[convertedMyChoice];

  if (convertedElfChoice === "Rock") {
    points += rockPointsConverter[myChoiceInPoints] + myChoiceInPoints;
  } else if (convertedElfChoice === "Paper") {
    points += paperPointsConverter[myChoiceInPoints] + myChoiceInPoints;
  } else if (convertedElfChoice === "Scissors") {
    points += scissorPointsConverter[myChoiceInPoints] + myChoiceInPoints;
  }
}

console.log({ points });
