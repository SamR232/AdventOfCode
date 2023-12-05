const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().split("\n");

const testData = ["six3", "nineight"];

const numberConverter = {
  ne: "1",
  wo: "2",
  hree: "3",
  our: "4",
  ive: "5",
  ix: "6",
  even: "7",
  ight: "8",
  ine: "9",
};

const arrayOfInputNumbers = input.map((value) => {
  const valuesOnly = value.match(
    /[0-9]|(?<=o)ne|(?<=t)wo|(?<=t)hree|(?<=f)our|(?<=f)ive|(?<=s)ix|(?<=s)even|(?<=e)ight|(?<=n)ine/g
  );

  let firstValue = valuesOnly[0];
  let lastValue = valuesOnly[valuesOnly.length - 1];

  console.log({ firstValue, lastValue });

  if (firstValue.length > 1) {
    firstValue = numberConverter[firstValue];
  }
  if (lastValue.length > 1) {
    lastValue = numberConverter[lastValue];
  }

  return Number(firstValue + lastValue);
});

const answer = arrayOfInputNumbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(answer);
