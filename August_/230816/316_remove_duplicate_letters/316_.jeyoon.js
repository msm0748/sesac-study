//받는 것은 문자열 s로 받음 

/**
 * @param {string} s
 * @return {string}
 */

// 새로운 function을 선언
var removeDuplicateLetters = function(s) {
    const lastOccurrence = {};
    // 객체가 등장하네?
    for (let i = 0; i < s.length; i++) {
        // 순회하는 부분, 문자가 마지막으로 등장한 인덱스를 저장한다.
        lastOccurrence[s[i]] = i;
    }
    
    const stack = [];
    const visited = new Set();
    
    for (let i = 0; i < s.length; i++) {
        if (visited.has(s[i])) {
            continue;
            console.log(visited.has(s[i]));
        }
        
        while (
            stack.length > 0 &&
            s[i] < stack[stack.length - 1] &&
            i < lastOccurrence[stack[stack.length - 1]]
        ) {
            visited.delete(stack.pop());
        }
        
        stack.push(s[i]);
        visited.add(s[i]);
        console.log(i);
        console.log(stack);
        console.log(visited);
    }
    
    return stack.join('');
};

// Example usage
const input1 = "bcabc";
const output1 = removeDuplicateLetters(input1);
console.log(output1); // Output: "abc"

const input2 = "cbacdcbc";
const output2 = removeDuplicateLetters(input2);
console.log(output2); // Output: "acdb"
