// [브론즈1] https://www.acmicpc.net/problem/2309
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

function getResult() {
  input = input.map((iter) => Number(iter));
  const total = input.reduce((pre, cur) => pre + cur) - 100;
  console.log(total);
  function dfs(index, selected, total) {
    // 종료 조건: 7명을 선택했고 합이 100인 경우
    if (selected.length === 7 && total === 100) {
      return selected.sort((a, b) => a - b);
    }

    // 추가 탐색 조건: 인덱스가 난쟁이 수를 넘지 않고, 7명 미만 선택
    if (index < input.length && selected.length < 7) {
      // 현재 난쟁이를 선택하는 경우
      const resultWithCurrent = dfs(
        index + 1,
        [...selected, input[index]],
        total + input[index]
      );
      if (resultWithCurrent) return resultWithCurrent;

      // 현재 난쟁이를 선택하지 않는 경우
      const resultWithoutCurrent = dfs(index + 1, selected, total);
      if (resultWithoutCurrent) return resultWithoutCurrent;
    }

    // 조건에 맞는 경우를 찾지 못한 경우
    return null;
  }

  return dfs(0, [], 0).join("\n");
}

console.log(getResult());
