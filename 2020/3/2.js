const fs = require("fs");

const input = fs.readFileSync('./input.txt', 'utf-8').toString().trim().split(/[\r\n]+/);

const rightValDownOne = (rightVal) => input
    //  the index or the index after going back to the beginning of the line
    .filter((line, idx) => line.charAt((idx * rightVal) % line.length) === '#')
    .length;

const rightOneDownTwo = () => {
return (input
        .filter((line, index) => line.charAt((index / 2) % line.length) === "#" && index % 2 === 0)
        .length);
}
console.log(rightValDownOne(3) * rightValDownOne(1) * rightValDownOne(5) * rightValDownOne(7) * rightOneDownTwo());
// console.log(rightValDownOne(3))