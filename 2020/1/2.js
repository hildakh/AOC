const fs = require("fs");
const input = fs
  .readFileSync("./input.txt", "utf-8")
  .trim()
  .split("\n")
  .map((x) => parseInt(x))
  .sort((a,b) => a - b);

const findEntries = (input) => {
  for (let i = 0; i < input.length - 2; i++) {
    let leftItem = i + 1;
    let rightItem = input.length - 1;
    while (leftItem < rightItem) {
      if (input[rightItem] + input[i] + input[leftItem] > 2020) {
        rightItem--;
      } else if (input[rightItem] + input[i] + input[leftItem] < 2020) {
        leftItem++;
      } else {
        return input[rightItem] * input[i] * input[leftItem];
      }
    }
  }
  return false;
};

console.log(findEntries(input));
