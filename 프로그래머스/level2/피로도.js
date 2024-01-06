// 각 던전마다 탐험을 시작하기 위해 필요한 "최소 필요 피로도"
// 던전 탐험을 마쳤을 때 소모되는 "소모 피로도"
function solution(k, dungeons) {
  // 현재 피로도는 k
  // "최소 필요 피로도", "소모 피로도" 가 담긴 dungeons
  const visited = Array.from({ length: dungeons.length }).fill(false);
  const answer = [];
  // DFS로 완전탐색
  const dfs = (count, k) => {
    answer.push(count);
    for (let i = 0; i < dungeons.length; i++) {
      // 탈출조건
      if (visited[i]) continue;
      if (dungeons[i][0] > k) continue;
      visited[i] = true;
      dfs(count + 1, k - dungeons[i][1]);
      // 모든 경우 탐색을 위해 방문 처리를 false로 해줘야해요 !
      visited[i] = false;
    }
  };

  dfs(0, k);
  return Math.max(...answer);
}
