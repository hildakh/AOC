const fs = require("fs");

const input = fs.readFileSync("./input.txt", "utf-8").trim().split(/\r?\n/).join().split(",,")


const acceptablePass = () => input.filter(row => row.includes("byr") && row.includes("iyr") && row.includes("eyr") && row.includes("hgt") && row.includes("hcl") && row.includes("ecl") && row.includes("pid")).length;


console.log(acceptablePass())