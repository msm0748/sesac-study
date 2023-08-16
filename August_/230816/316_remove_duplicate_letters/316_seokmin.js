/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  var set = new Set(s);
  return [...set].sort().join('');
};

removeDuplicateLetters('bcabc'); // abc
removeDuplicateLetters('cbacdcbc'); // abcd

// Input: s = "cbacdcbc"
// Output: "acdb" 규칙은 모르겠음
