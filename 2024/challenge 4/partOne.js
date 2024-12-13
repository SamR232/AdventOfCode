import { readFileSync } from "fs";
let input = readFileSync("./input.txt")
  .toString()
  .split("/n")
  .map((row) => row.split(""));

console.log({ input });

input.forEach((row, rowIndex) => {
  row.forEach((col, colIndex) => {
    const currentCoords = { row: rowIndex, col: colIndex };
    // input[currentCoords.row][currentCoords.col] === col <== true
    input[rowIndex + 1]?.[colIndex];

    const velocity = { row: 0, col: 1 };
  });
});
