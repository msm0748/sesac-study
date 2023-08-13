const cal = (arr, loc) => {
    let temp = []; // 임시로 객체형태로 저장할 배열
    let result = []; // 재배열한 값들을 저장하는 배열

    // 선택된 문서가 무엇인지 판별하기 위해 주어진 배열을 객체형식으로 변경
    for (let i = 0; i < arr.length; i++) {
        temp.push({
            value: arr[i],
            selected: loc === i ? true : false,
        });
    }

    // temp의 길이가 0이 될때까지 계속 순회
    while (temp.length > 0) {
        // 배열내에서 가장 큰 수일경우 result배열에 push, 아니면 그 요소를 빼서 temp배열에 push
        if (checkHigh(temp, temp[0].value)) {
            const num = temp.shift();
            result.push(num);
        } else {
            const num = temp.shift();
            temp.push(num);
        }
    }

    // 순회 완료후 선책된 문서를 찾아 그 문서의 위치를 반환
    for (let j = 0; j < result.length; j++) {
        if (result[j].selected) {
            return j + 1;
        }
    }
};

// 배열내에서 value의 값이 가장 클 경우 true, 아니면 false를 반환하는 함수
const checkHigh = (arr, value) => {
    for (let j = 0; j < arr.length; j++) {
        if (arr[j].value > value) {
            return false;
        }
    }
    return true;
};

const inputs = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
let [count, ...arr] = inputs;
arr = arr.map((item) => item.split(" ").map(Number));
for (let i = 0; i < count; i++) {
    const [length, loc] = arr.shift();
    const stack = arr.shift();
    console.log(cal(stack, loc));
}
