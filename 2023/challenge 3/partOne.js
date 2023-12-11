const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split("\n");

const testData = [
  // `48.................501....33.....622..............763.........331.................161.683......................................980..........`,
  `...491.842.....948*..................338.....*......=...........-...309.......633*....*....................*990...706...452......*..+.......`,
  //`...*...*....................426........*..408.........................*............659...............250.........&.......*.....767...403....`,
];
let total = 0;

testData.forEach((line) => {
  console.log({ line });

  const regex = /\d+(?=[^\w\s.])|(?<=[^\w\s.])\d+/gm;
  const isUsableNumber = line.match(regex);

  isUsableNumber.forEach((usableNumber) => {
    const position = line.indexOf(usableNumber);
    const length = usableNumber.length;
    console.log({ usableNumber, position, length });
  });

  if (isUsableNumber) {
    isUsableNumber.forEach((number) => (total += Number(number)));
  }
});

console.log({ total });

/*
..***..   
..*4*..
..***..
*/
