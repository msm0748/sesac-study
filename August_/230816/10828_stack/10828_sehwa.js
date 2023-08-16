// push X: 정수 X를 스택에 넣는 연산이다.
// pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size: 스택에 들어있는 정수의 개수를 출력한다.
// empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
// top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.

const array = require("fs")
  .readFileSync("./10828.txt")
  .toString()
  .trim()
  .split("\n");

function solution(s) {
  //; shift() : 앞에서 제거, 제거된 값을 RETURN !
  const len = s.shift();
  // 맨 앞은 len 을 의미

  const stack = [];
  const result = [];

  for (let i = 0; i < len; i++) {
    switch (s[i]) {
      case "pop":
        result.push(stack[0] ? stack.pop() : -1);
        break;
      case "size":
        result.push(stack.length);
        break;
      case "empty":
        result.push(stack[0] ? 0 : 1);
        // 아래처럼 하면 안됨 : 빈 Array('[]')값은 true임 !
        // result.push(stack ? 0 : 1);
        break;
      case "top":
        result.push(stack[0] ? stack[stack.length - 1] : -1);
        break;
      default:
        stack.push(s[i].split(" ")[1]);
      // 공백을 기준으로 뒷부분
    }
  }
  console.log(result.join("\n"));
}

solution(array);
