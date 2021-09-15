// 반복문: 초기화, 탈출조건, 탈출 못했을 시 수행할 내용
let a = 10;
while (a>0) {
    console.log(a);
    a -= 1;
}

for (let i=10; i>0; i-=1) {
    if (i===5) continue;
    if (i===1) break;
    console.log(i);
}

for (let i=0; i<5; i++) {
    for (let j=0; j<5; j++) {
        if (j===i) continue;
        console.log(`${i}-${j}`);
    }
}


// 반복문 - practice

// print(1+2+...+100)
let result = 0;
for (let i=1; i<=100; i++) {
    result += i;
}
console.log(result);

// 별찍기
for (let i=1; i<=6; i++) {
    console.log("*".repeat(i));
}


// function
const arrMultiplyBy2 = (arr) => {
    const arr2 = [];
    for (let i=0; i<arr.length; i++) {
        arr2.push(arr[i]*2);
    }
    return arr2;
}
console.log(arrMultiplyBy2([1, 2, 3, 4, 5]));

function multiply(x, y, z) {
    return x * y * z;
}

// function - practice

const handleNumberArray = (arr) => {
    const result = []
    arr.forEach((a) => {
        let num2 = 0
        if (a % 2 === 0) {
            num2 = a * 2 + 1
        } else {
            num2 = a ** 2
        }
        result.push(num2);
    })
    return result
}
console.log(handleNumberArray([1, 2, 3]))

const handleMap = (arr) => {
    return arr.map((a) => {
        if (a % 2 === 0) {
            return 2 * a + 1;
        } else {
            return a ** 2;
        }
    });
}
console.log(handleMap([1, 2, 3]))


const handleA = (num) => {
    for (let i=0; i<num; i++) {
        console.log(" ".repeat(i) + "A".repeat(num-i));
    }
    return false;
}
handleA(5);