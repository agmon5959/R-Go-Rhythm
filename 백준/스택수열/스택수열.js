// [실버2] https://www.acmicpc.net/problem/1874
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

function getResult() {
  let m = 1;
  const stack = [];
  const result = [];

  for (let i = 1; i <= parseInt(input[0]); i++) {
    const target = parseInt(input[i]);
    // stack에 마지막 배열에 숫자가 없거나, 있어도 input[i]가 더 크면
    if (target > (stack[stack.length - 1] ? stack[stack.length - 1] : 0)) {
      // input[i]와 같아질 때까지 stack에 숫자 추가 push
      for (let j = m; j <= target; j++) {
        stack.push(m++);
        result.push("+");
      }
    } else if (target < stack[stack.length - 1]) {
      return "NO";
    }
    // input[i]와 stack의 마지막 수가 같아지면 pop
    if (target === stack[stack.length - 1]) {
      result.push("-");
      stack.pop();
    }
  }
  return result.join("\n");
}

console.log(getResult());
