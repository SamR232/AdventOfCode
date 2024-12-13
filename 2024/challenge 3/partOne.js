import { readFileSync } from "fs";
let input = readFileSync("./input.txt").toString();

const response = input.match(/mul\(\d{1,3},\s*\d{1,3}\)/g);

console.log({ response });

const multiplied = response.map((func) => {
  const numbersAsString = func.match(/\d{1,3}/g);
  const numbers = numbersAsString.map((number) => Number(number));
  return numbers[0] * numbers[1];
});

const sum = multiplied.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log({ sum });
