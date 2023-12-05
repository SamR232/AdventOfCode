const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().split("\n");

const testData = [
  "1abc2",
  "pqr3stu8vwx",
  "a1b2c3d4e5f",
  "treb7uchet",
  "54gfdcg63",
];

const sumOfInputNumbers = testData.map((codedString) => {
  // find the numbers
  const digitsOnly = codedString.match(/\d+/g);

  // Get first & last pairs
  const firstAndLastDigitPairs =
    digitsOnly[0] + digitsOnly[digitsOnly.length - 1];

  const firstDigit = firstAndLastDigitPairs[0];
  const lastDigit = firstAndLastDigitPairs[firstAndLastDigitPairs.length - 1];

  return Number(firstDigit + lastDigit);
});

const answer = sumOfInputNumbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(answer);

// 54081
