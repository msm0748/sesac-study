/**
 * @param {string} s
 * @return {string}
 */

let removeDuplicateLetters = function (s) {
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    if (arr.includes(s[i])) {
      // 배열에 있으면 넘어가기
      continue;
    } else {
      // 배열 안에 없으면 배열에 넣기
      arr.push(s[i]);
    }
  }

  let result = arr.sort();
  console.log(result);
};

removeDuplicateLetters("bcacbc");
removeDuplicateLetters("cbacdcbc");

//# "acdb" 규칙을 이해 못함...^__^
