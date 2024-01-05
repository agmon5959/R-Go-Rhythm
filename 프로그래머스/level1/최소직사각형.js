function solution(sizes) {
  let horizon = [];
  let vertical = [];
  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] < sizes[i][1]) {
      horizon.push(sizes[i][1]);
      vertical.push(sizes[i][0]);
    } else {
      horizon.push(sizes[i][0]);
      vertical.push(sizes[i][1]);
    }
  }
  return Math.max(...horizon) * Math.max(...vertical);
}
