const fs = require("fs");
const input = fs
  .readFileSync("./input.txt", "utf-8")
  .trim()
  .split("\n")
  .map((set) => set.split(" "));

const checkValidity = (input) => {
  let acceptedPasswords = 0;
  input.forEach((array) => {
    // let timesRepeated = 0;
    let minMaxRep = array[0].split("-");
    if (
      array[2].split("")[minMaxRep[0] - 1] === array[1][0] &&
      array[2].split("")[minMaxRep[1] - 1] === array[1][0]
    ) {
      return;
    }
    if (
      array[2].split("")[minMaxRep[0] - 1] !== array[1][0] &&
      array[2].split("")[minMaxRep[1] - 1] !== array[1][0]
    ) {
      return;
    } else {
        acceptedPasswords++
    }
  });
  return acceptedPasswords;
};

// console.log(input);
console.log(checkValidity(input));
