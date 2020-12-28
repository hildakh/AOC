const fs = require("fs");
const input = fs
  .readFileSync("./input.txt", "utf-8")
  .trim()
  .split("\n").map(set => set.split(" "))

const checkValidity = (input) => {
    let acceptedPasswords = 0;
    input.forEach(array => {
        let timesRepeated = 0;
        let minMaxRep = array[0].split("-");
        array[2].split("").forEach(letter => {
            if (letter === array[1][0]) {
                timesRepeated++;
            }
        });
        if (timesRepeated >= minMaxRep[0] && timesRepeated <= minMaxRep[1]) {
            acceptedPasswords++;

        }
    })
    return acceptedPasswords;
  }



console.log(checkValidity(input));
