const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().split("\n");

/*
uppercase and lowercase are different items
Lowercase a - z have priorities 1 - 26.
Uppercase A - Z have priorities 27 - 52.
*/

const alphabet = ".abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

let total = 0;

// const inputLength = input.length / 3;

for (let i = 0; i < input.length; i += 3) {
  //DO NOT MUTATE ORIGINAL ARRAY
  const groupArray = input.slice(i, i + 3);
  const first = groupArray[0].split("");
  const second = groupArray[1].split("");
  const third = groupArray[2].split("");

  const filteredArray = first.filter(
    (letter) => second.includes(letter) && third.includes(letter)
  );

  total += alphabet.indexOf(filteredArray[0]);
}

console.log({ total });
