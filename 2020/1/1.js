const fs = require("fs");
const input = fs
  .readFileSync("./input.txt", "utf-8")
  .trim()
  .split("\n")
  .map((x) => parseInt(x))
  .sort((a, b) => a - b);

const findEntries = (input) => {
  let minIndex = 0;
  let maxIndex = input.length - 1;

  let timesFound2020 = 0;

  while (timesFound2020 === 0) {
    if (input[minIndex] + input[maxIndex] > 2020) {
      maxIndex--;
    } else if (input[minIndex] + input[maxIndex] < 2020) {
      minIndex++;
    } else {
      timesFound2020++;
      return input[minIndex] * input[maxIndex];
    }
  }
};

console.log(findEntries(input));
