function solution(arg) {
  const ALPHABET = [];
  let cnt = 0;

  // 받은 파라미터를 문자열로 나눠서 배열에 담음
  const name = [...arg];
  let curorMoveCntArr = [name.length - 1];
  // 아스키코드로 알파벳 담기
  for (let i = 65; i <= 90; i++) {
    ALPHABET.push(String.fromCharCode(i));
  }
  // 이동 위치 계산
  function calcCnt(target) {
    let startIndex = 0;
    let endIndex = ALPHABET.length - 1;
    while (true) {
      if (ALPHABET[startIndex] === target) {
        return startIndex;
      }
      if (ALPHABET[endIndex] === target) {
        return ALPHABET.length - endIndex;
      }
      startIndex++;
      endIndex--;
    }
  }
  // 커서 이동 계산
  for (let i = 0; i < name.length; i++) {
    let nextIdx = i + 1;
    // 'A'가 아닌 다음 문자를 찾을 때까지 인덱스 증가
    while (nextIdx < name.length && name[nextIdx] === "A") {
      nextIdx++;
    }
    // 첫 번째 케이스
    // 왼쪽으로 돌아가서 다시 오른쪽으로 가는 경우
    // i*2 : 처음 위치에서 왼쪽으로 이동 후 다시 오른쪽으로 이동
    // (name.length - nextIdx) : 'A' 이후의 문자로 이동
    let leftToRight = i * 2 + (name.length - nextIdx);

    // 두 번째 케이스
    // 오른쪽으로 가서 다시 왼쪽으로 돌아오는 경우
    // i : 처음 위치에서 오른쪽으로 이동
    // (name.length - nextIdx) * 2 : 'A' 이후의 문자로 이동 후 다시 처음 위치로 돌아오기
    let rightToLeft = i + (name.length - nextIdx) * 2;

    // 계산된 이동 횟수를 배열에 추가
    curorMoveCntArr.push(leftToRight);
    curorMoveCntArr.push(rightToLeft);
  }

  // 커서를 이동한 횟수 중 최솟값 구하기
  const moveCnt = Math.min(...curorMoveCntArr);
  // 총 알파벳 이동을 위한 카운트
  for (let i = 0; i < name.length; i++) {
    cnt += calcCnt(name[i]);
  }

  return cnt + moveCnt;
}
