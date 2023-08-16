// 10828 풀
const fs = require('fs');
const array = fs.readFileSync('./ex1.txt').toString().trim().split("\n");

let stack = [];
let result = [];

let len = array.shift(); 
// stack이 위에서 부터 자료를 빼오는 구조인데 shift가 왜 가능한거지?

for(let i = 0; i < len ; i++){
    switch(array[i]){
        case 'pop':
            // pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
            result.push(stack.pop() || -1);
            console.log('pop');
            break;
        case 'size':
            // size: 스택에 들어있는 정수의 개수를 출력한다.
            result.push(stack.length);
            console.log('size');

            break;

        case 'empty':
            // empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
            result.push(stack.length == 0? 1:0);
            // true false에 따라 간단한 0,1 출력시 위와 같은 삼항 연산 적극 활용할 것.
            console.log('empty');
            break;

        case 'top':
            // top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
            result.push(stack[stack.length-1] || -1);
            console.log('top');
            break;

        default:
            // push X: 정수 X를 스택에 넣는 연산이다.
            stack.push(array[i].split(" ")[1]);
            console.log('push x')
            break;
    }
}

console.log(result.join('\n'));