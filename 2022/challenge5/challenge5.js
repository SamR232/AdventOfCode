const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split("\n");

const stacksArray = [
  [],
  ["W", "D", "G", "B", "H", "R", "V"],
  ["J", "N", "G", "C", "R", "F"],
  ["L", "S", "F", "H", "D", "N", "J"],
  ["J", "D", "S", "V"],
  ["S", "H", "D", "R", "Q", "W", "N", "V"],
  ["P", "G", "H", "C", "M"],
  ["F", "J", "B", "G", "L", "Z", "H", "C"],
  ["S", "J", "R"],
  ["L", "G", "S", "R", "B", "N", "V", "M"],
];

const removeLastChar = (
  amountToMoveNumber,
  moveFromStackArray,
  moveToStackArray
) => {
  if (amountToMoveNumber > 0) {
    const removedChar = moveFromStackArray.pop();
    moveToStackArray.push(removedChar);
    amountToMoveNumber--;
    removeLastChar(amountToMoveNumber, moveFromStackArray, moveToStackArray);
  } else {
    return;
  }
};

input.forEach((instruction, index) => {
  if (index < input.length) {
    const numbersArray = instruction.match(/\d+/g);

    const amountToMoveNumber = Number(numbersArray[0]);

    const moveFromStackArrayNumber = Number(numbersArray[1]);
    const moveFromStackArray = stacksArray[moveFromStackArrayNumber];

    const moveToStackArrayNumber = Number(numbersArray[2]);
    const moveToStackArray = stacksArray[moveToStackArrayNumber];

    removeLastChar(amountToMoveNumber, moveFromStackArray, moveToStackArray);
  }
});

let answer = "";
stacksArray.forEach((stack) => (answer += stack.slice(-1).toString()));

console.log({ answer });
