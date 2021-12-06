const fs = require("fs");
const input = fs
  .readFileSync("./input.txt", "utf-8")
  .trim()
  .split('\n');

let increasedCount = 1;

for (let i = 0; i < input.length; i++) {
  if (input[i] > input[i - 1]) {
    increasedCount++;
  }
}



console.log(increasedCount)
