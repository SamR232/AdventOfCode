const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split("\n");

const testData = [
  "Game 89: 13 green, 3 red; 4 red, 9 green, 4 blue; 9 green, 10 red, 2 blue",
  "Game 1: 13 green, 3 red; 4 red, 9 green, 4 blue; 9 green, 10 red, 2 blue",
  "Game 12: 13 green, 3 red; 4 red, 9 green, 4 blue; 9 green, 10 red, 2 blue",
];

let answer = 0;

input.forEach((game) => {
  const red = game.match(/\d+(?=\sred)/g).map((string) => Number(string));
  const green = game.match(/\d+(?=\sgreen)/g).map((string) => Number(string));
  const blue = game.match(/\d+(?=\sblue)/g).map((string) => Number(string));

  const redHighestValue = Math.max(...red);
  const greenHighestValue = Math.max(...green);
  const blueHighestValue = Math.max(...blue);
  const gameId = Number(game.match(/(?<=Game\s)\d+/g));

  if (
    redHighestValue <= 12 &&
    greenHighestValue <= 13 &&
    blueHighestValue <= 14
  ) {
    answer += gameId;
  }
});

console.log({ answer });
