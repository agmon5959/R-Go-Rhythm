// [실버2] https://www.acmicpc.net/problem/3986
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(path).toString().trim().split("\n");

function getGoodWords(wordArr) {
  const resultArr = [];
  const words = [...wordArr];
  for (let i = 0; i < words.length; i++) {
    if (resultArr.length === 0) {
      resultArr.push(words[i]);
      continue;
    }
    if (words[i] === resultArr[resultArr.length - 1]) {
      resultArr.pop();
    } else {
      resultArr.push(words[i]);
    }
  }

  if (resultArr.length === 0) {
    return true;
  } else {
    return false;
  }
}

function getResult() {
  const len = input.shift();
  let goodWords = 0;

  for (let i = 0; i < len; i++) {
    if (getGoodWords(input[i])) {
      goodWords++;
    }
  }

  return goodWords;
}

console.log(getResult());
