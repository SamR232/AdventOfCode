import { readFileSync } from "fs";
const input = readFileSync("./input.txt").toString().split("\n");

const sortNumbers = (number) => {
  return number.sort((a, b) => a - b);
};

const findDifference = (firstSet, secondSet) => {
  let differenceTotal = 0;

  for (let i = 0; i < firstSet.length; i += 1) {
    const difference = firstSet[i] - secondSet[i];
    differenceTotal += Math.abs(difference);
  }

  return differenceTotal;
};

const firstSetArray = [];
const secondSetArray = [];

for (let i = 0; i < input.length; i += 1) {
  const numberSetSplit = input[i].split("   ");
  firstSetArray.push(Number(numberSetSplit[0]));
  secondSetArray.push(Number(numberSetSplit[1]));
}

const sortedFirstSet = sortNumbers(firstSetArray);
const sortedSecondSet = sortNumbers(secondSetArray);

const differenceTotal = findDifference(sortedFirstSet, sortedSecondSet);

console.log({ sortedFirstSet, sortedSecondSet, differenceTotal });
