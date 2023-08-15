const calculate = (array, dup) => {
    array.shift();
    array.pop();
    let num = 0;
    let len = 0;
    while (array.length > 0) {
        if (array[1] === "(") {
            const dup = array.shift();
            const temp = [];
            let count = 0;
            while (true) {
                if (array[0] === "(") {
                    temp.push(array.shift());
                    count++;
                } else if (array[0] === ")") {
                    --count;
                    temp.push(array.shift());
                    if (count === 0) {
                        break;
                    }
                } else {
                    temp.push(array.shift());
                }
            }
            num = calculate(temp, dup);
        } else {
            array.shift();
            len++;
        }
    }
    return dup * (num + len);
};

const input = require("fs").readFileSync("./a.txt").toString().trim();
const arr = input.split("");
const calResult = [];
let len = 0;
while (arr.length > 0) {
    if (arr[1] === "(") {
        const dup = arr.shift();
        const temp = [];
        let count = 0;
        while (true) {
            if (arr[0] === "(") {
                temp.push(arr.shift());
                count++;
            } else if (arr[0] === ")") {
                --count;
                temp.push(arr.shift());
                if (count === 0) {
                    break;
                }
            } else {
                temp.push(arr.shift());
            }
        }
        calResult.push(calculate(temp, dup));
    } else {
        arr.shift();
        len++;
    }
}

let result = 0;
for (r of calResult) {
    result += r;
}
console.log(len + result);
