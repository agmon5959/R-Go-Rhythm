function solution(nums) {
  let nonDupNums = [...new Set(nums)]; // 중복 제거한 배열
  let maxGet = parseInt(nums.length / 2); // 최대로 많이 가져갈 수 있는 포켓몬의 수

  return Math.min(nonDupNums.length, maxGet);
}
