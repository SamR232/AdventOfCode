import { readFileSync } from "fs";
const input = readFileSync("./input.txt").toString().split("\n");

const firstSetArray = [];
const secondSetArray = [];

for (let i = 0; i < input.length; i += 1) {
  const numberSetSplit = input[i].split("   ");
  firstSetArray.push(Number(numberSetSplit[0]));
  secondSetArray.push(Number(numberSetSplit[1]));
}

let total = 0;

firstSetArray.forEach((firstSetNumber) => {
  secondSetArray.find((number) => {
    if (number === firstSetNumber) {
      total += number;
    }
  });
});
console.log({ total });
