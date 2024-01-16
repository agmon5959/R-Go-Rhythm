// [골드5] https://www.acmicpc.net/problem/2493
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = require("fs")
  .readFileSync("./input.txt")
  // .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function getResult() {
  console.log(input);
}

console.log(getResult());
