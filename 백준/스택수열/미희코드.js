const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [total, ...targetNumbers] = input; // 전체 갯수와 똑같이 만들 배열
const numbers = Array.from({ length: total }, (_, index) => total - index); // total ~ 1까지의 숫자 배열
const stack = []; // 스택 배열
const result = []; // 결과 배열
let invalid = false;

// 반복실행 하는 함수
const repeat = (count, func) => Array.from({ length: count }, () => func());

// 다음에 넣을 number를 찾아서 처리하는 함수
const findTarget = (number) => {
  // stack의 마지막 숫자를 먼저 체크한다
  // 마지막만 체크하는 이유는 중간에 있는 숫자까지 pop을 하게 되면 result에 추가되기 때문에 targetNumbers와 똑같이 만들 수 없음
  if (stack[stack.length - 1] === number) {
    popNumber();
    return;
  }

  // stack에 없다면 아직 numbers에 존재하기 때문에 해당 인덱스까지 stack으로 옮겨준다
  const numbersIndex = numbers.findIndex((el) => el === number);
  if (numbersIndex !== -1) {
    repeat(numbers.length - numbersIndex, moveToStack);
    popNumber();
    return;
  }

  // 위 두 조건을 만족하지 못하면 만들 수 없는 targetNumbers이기 때문에 invalid 활성화
  invalid = true;
};

// 숫자 배열에서 stack으로 넘겨주는 함수
const moveToStack = () => {
  stack.push(numbers.pop());
  result.push("+");
};

// stack에서 pop
const popNumber = () => {
  stack.pop();
  result.push("-");
};

// 실제로 돌아가는건 아래 반복문이 전부
// 만들어야 할 targetNumbers를 순회하며 findTarget 함수만 실행해준다.
targetNumbers.forEach((targetNum) => {
  findTarget(Number(targetNum));
});

// invalid 플래그가 활성화 되어있다면 "NO" 출력
if (invalid) console.log("NO");
else console.log(result.join("\n"));
