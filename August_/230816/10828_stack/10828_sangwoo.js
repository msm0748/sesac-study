const inputs = require("fs").readFileSync("/dev/stdin").toString().split("\n");
inputs.shift();
const stack = [];
const answer = [];
for (const input of inputs) {
    switch (input) {
        case "pop":
            answer.push(stack.length === 0 ? -1 : stack.pop());
            break;
        case "size":
            answer.push(stack.length);
            break;
        case "empty":
            answer.push(stack.length === 0 ? 1 : 0);
            break;
        case "top":
            answer.push(stack.length === 0 ? -1 : stack[stack.length - 1]);
            break;
        default:
            stack.push(input.split(" ")[1]);
            break;
    }
}
console.log(answer.join("\n"));
