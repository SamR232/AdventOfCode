import { readFileSync } from "fs";

const input = readFileSync("./input.txt").toString().split("\n");

let safeCount = 0;

const analyseLevels = ({ levels, report }) => {
  let isReportSafe = false;
  let loopCount = -1;
  while (!isReportSafe && loopCount <= levels.length) {
    const copyOfLevels = [...levels];
    let copyOfReport = report;
    if (loopCount >= 0 && loopCount <= levels.length) {
      copyOfLevels.splice(loopCount, 1);
      copyOfReport = copyOfLevels.join(" ");
    }

    let areLevelsLinear = false;
    if (
      copyOfLevels.sort((a, b) => a - b).join(" ") === copyOfReport ||
      copyOfLevels.sort((a, b) => b - a).join(" ") === copyOfReport
    ) {
      areLevelsLinear = true;
    }

    const diffsAcceptable = !copyOfLevels.some((level, index) => {
      if (index < copyOfLevels.length - 1) {
        const diff = Math.abs(level - copyOfLevels[index + 1]);
        return diff < 1 || diff > 3;
      }
      return false;
    });

    isReportSafe = areLevelsLinear && diffsAcceptable;
    loopCount += 1;
  }

  return isReportSafe;
};

input.forEach((report) => {
  const levels = report.split(" ").map((level) => Number(level));
  const isSafe = analyseLevels({ levels, report });
  if (isSafe) {
    safeCount += 1;
  }
});
console.log(safeCount);
