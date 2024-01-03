function solution(numbers) {
  const numToStr = numbers.map((_) => "" + _);
  numToStr.sort((a, b) => b + a - (a + b));
  const answer = numToStr.join().replaceAll(",", "");
  return Number(answer[0]) + Number(answer[1]) === 0 ? "0" : answer;
}
