function solution(genres, plays) {
  // 정렬 순서
  // 1) 장르별 plays수가 가장 큰 놈
  // 2) 장르 내에서 많이 재생된 놈
  // 3) 장르 내에서 재생 횟수가 같은 노래라면 고유 번호가 낮은 순 -> 즉 인덱스가 작은 순

  // 클래식 : 총합 : a, { 횟수: b , 고유번호 : c }
  // 팝 : 총합 : a, { 횟수: b , 고유번호 : c }
  // ...

  const songMap = new Map();
  const arr = genres.map((iter, idx) => [iter, plays[idx]]);
  arr.forEach(([장르, 횟수], idx) => {
    const data = songMap.get(장르) || { total: 0, songs: [] };
    songMap.set(장르, {
      total: data.total + 횟수,
      songs: [...data.songs, { 횟수, idx }]
        .sort((a, b) => b.횟수 - a.횟수)
        .slice(0, 2),
    });
  });

  return [...songMap]
    .sort((a, b) => b[1].total - a[1].total)
    .flatMap((item) => item[1].songs)
    .map((iter) => iter.idx);
}
