const fs = require("fs");

const input = fs.readFileSync('./input.txt', 'utf-8').toString().trim().split(/[\r\n]+/);
console.log(input
    //  the index or the index after going back to the beginning of the line
    .filter((line, idx) => line.charAt((idx * 3) % line.length) == '#')
    .length);