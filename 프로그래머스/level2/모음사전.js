function solution(word) {
  const dic = [];
  const alphabets = ["A", "E", "I", "O", "U"];
  const makeDic = (deps, alphabet) => {
    dic.push(alphabet);
    for (let i = 0; i < alphabets.length; i++) {
      if (deps < alphabets.length) {
        makeDic(deps + 1, alphabet + alphabets[i]);
      }
    }
  };
  makeDic(0, "");
  const answer = dic.findIndex((iter) => iter === word);
  console.log(answer);
  return dic.findIndex((iter) => iter === word);
}

solution("AAAAE");
solution();
solution();
