// [골드5] https://www.acmicpc.net/problem/2493
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = require("fs")
  .readFileSync("./input.txt")
  // .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function getResult() {
  const length = Number(input[0]);
  const towers = input[1].split(" ").map(Number);
  const stack = [];
  const result = new Array(length).fill(0);

  for (let i = 0; i < length; i++) {
    while (stack.length > 0 && stack[stack.length - 1][0] < towers[i]) {
      stack.pop();
    }
    if (stack.length > 0) {
      result[i] = stack[stack.length - 1][1];
    }
    stack.push([towers[i], i + 1]);
  }

  return result.join(" ");
}

console.log(getResult());
