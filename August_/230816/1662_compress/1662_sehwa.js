// 10342(76)
// 8
//; 10347676

// 1(1(1(1(1(1(1(0(1234567890))))))))
// 0

// 1()66(5)
// 7
//; 6 555555

// 33(562(71(9)))
// 33(562(79))
// 33(567979)
// 33(567979)
// 3567979567979567979
//; 19

//#
// 괄호가 더이상 없어질 때까지, 찾음.

const array = require("fs")
  .readFileSync("./1662.txt")
  .toString()
  .trim()
  .split("\n");

function solution(s) {
  let str = s[0];
  // 반복 횟수
  let time = 0;
  // 반복 값
  let value = "";
  let idx = 0;
  // 대체
  let deleteStr = "";
  // let result = str;

  while (str.includes("(")) {
    idx = str.lastIndexOf("(");
    time = str[idx - 1];
    // value reset
    value = "";

    // ')' 만나기 전까지 넣어줌
    if (str[idx + 1] !== ")") {
      while (str[idx + 1] !== ")") {
        value += str[idx + 1];
        idx += 1;
      }
      // 'n()'의 경우
    } else if (str[idx + 1] === ")") {
      value = "";
    }

    // 지울 것
    deleteStr = `${time}(${value})`;
    str = str.replace(deleteStr, value.repeat(time));

    console.log("str", str);
    console.log("time", time);
    console.log("value", value);
  }

  console.log(str.length);
}

solution(array);
