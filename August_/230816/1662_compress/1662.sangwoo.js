const cal = (array) => {
    let len = 0;
    let stack = [];
    while (array.length > 0) {
        if (array[1] === '(') {
            const dup = array.shift();
            const temp = [];
            let count = 0;
            while (true) {
                if (array[0] === '(') {
                    temp.push(array.shift());
                    count++;
                } else if (array[0] === ')') {
                    --count;
                    temp.push(array.shift());
                    if (count === 0) {
                        break;
                    }
                } else {
                    temp.push(array.shift());
                }
            }
            temp.shift();
            temp.pop();
            stack.push(cal(temp) * dup);
        } else {
            array.shift();
            len++;
        }
    }
    let result = 0;
    for (r of stack) {
        result += r;
    }
    return len + result;
};

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const arr = input.split('');
console.log(cal(arr));
