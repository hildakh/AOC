const fs = require("fs");
const input = fs
  .readFileSync("./input.txt", "utf-8")
  .trim()
  .split('\n')


let increasedCount = 0;

for (let i = 0; i < input.length; i++) {
  let firstSum = parseInt(input[i]) + parseInt(input[i + 1]) + parseInt(input[i + 2]);
  let secondSum = parseInt(input[i + 1]) + parseInt(input[i + 2]) + parseInt(input[i + 3]);

  if (firstSum < secondSum) {
    increasedCount++;
  }
}



console.log(increasedCount)
