// [실버2] https://www.acmicpc.net/problem/10799
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(path).toString().trim().split("\n");

function getResult() {
  const value = input.pop();
  const arr = [];
  let result = 0;
  for (let i = 0; i < value.length; i++) {
    if (value[i] === "(") {
      arr.push(value[i]);
    } else {
      if (value[i - 1] !== undefined && value[i - 1] === "(") {
        // 레이저인 경우
        arr.pop();
        result += arr.length;
      } else {
        arr.pop();
        result += 1;
      }
    }
  }
  return result;
}

console.log(getResult());
