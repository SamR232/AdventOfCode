import { readFileSync } from "fs";
let input = readFileSync("./input.txt").toString();

const doRegex = /do\(\)/g;
const dontRegex = /don't\(\)/;

const splitByDo = input.split(doRegex);

let total = 0;

splitByDo.forEach((doCode, i) => {
  const rejectedCode = doCode.match(dontRegex);

  let cleanCode = "";

  if (rejectedCode) {
    cleanCode = doCode.slice(0, rejectedCode.index);
  } else {
    cleanCode = doCode;
  }
  console.log({ cleanCode });
  const response = cleanCode.match(/mul\(\d{1,3},\s*\d{1,3}\)/g);

  if (!response) return;

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

  total += sum;
});

console.log({ total });
