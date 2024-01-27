// [실버1] https://www.acmicpc.net/problem/10799

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function getResult() {
  const [rows, cols] = input
    .shift()
    .split(" ")
    .map((iter) => +iter);
  const map = input.map((iter) => iter.split(" "));

  const sizeArr = [];
  let size = 0;

  const dfs = (row, col) => {
    if (row < 0 || col < 0 || row >= rows || col >= cols) return false;

    if (map[row][col] == 1) {
      map[row][col] = 0;
      size += 1;
      dfs(row + 1, col);
      dfs(row - 1, col);
      dfs(row, col + 1);
      dfs(row, col - 1);

      return true;
    }

    return false;
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (dfs(i, j)) {
        sizeArr.push(size);
        size = 0;
      }
    }
  }

  const maxSize = Math.max(...sizeArr);

  if (maxSize === 0) {
    console.log(0);
    console.log(0);
  } else {
    console.log(sizeArr.length);
    console.log(maxSize);
  }
}

getResult();
