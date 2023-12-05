const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split("\n");

const testData = [
  "Game 1: 13 green, 3 red; 4 red, 9 green, 4 blue; 9 green, 10 red, 2 blue", // 13 * 10 * 4 = 520
  "Game 12: 7 green, 9 red; 4 red, 9 green, 4 blue; 9 green, 5 red, 15 blue", //
  "Game 89: 13 green, 3 red; 4 red, 9 green, 4 blue; 9 green, 10 red, 2 blue",
];

let answer = 0;

input.forEach((game) => {
  const red = game.match(/\d+(?=\sred)/g).map((string) => Number(string));
  const green = game.match(/\d+(?=\sgreen)/g).map((string) => Number(string));
  const blue = game.match(/\d+(?=\sblue)/g).map((string) => Number(string));

  const redHighestValue = Math.max(...red);
  const greenHighestValue = Math.max(...green);
  const blueHighestValue = Math.max(...blue);

  const powerCubes = redHighestValue * greenHighestValue * blueHighestValue;

  answer += powerCubes;
});

console.log({ answer });
