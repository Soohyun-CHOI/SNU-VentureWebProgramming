// 변수의 생애주기

const handleAbc = () => {
    let a = 0;
    let b = a + 3;
    return b;
}
console.log(handleAbc());
// console.log(a);

// 함수 내 변수 밖에서 활용하기: return 적절히 사용
const plus3 = (n) => {
    return n + 3;
}

const func1 = () => {
    const func2 = n => n + 1;
    console.log(func2(3));
}
func1();


// array를 받아서 전체 합을 return

const sumOfArray = (arr) => {
    let sum = 0;
    while (arr.length > 0) {
        sum += arr.pop();
    }
    return sum;
}
const arr = [1, 2, 3, 4, 5];
const result = sumOfArray(arr);
console.log(result);  // 사이드이펙트 발생: arr이 텅 비어버림

const sumOfArray2 = (arr) => {
    let sum = 0;
    arr.forEach(elem => {  // 원래 문법: .forEach(function(elem) => {...})
        if (isNaN(elem)) throw new Error("Input must be a number.");
        sum += elem;
    })
    return sum;
}
const arr2 = [1, 2, 3, 4]
console.log(sumOfArray2(arr2));
console.log(arr2);


// fibonacci: Recursive function
const fibonacci = (n) => {
    if (n===1 || n===2) return 1;
    return fibonacci(n-1) + fibonacci(n-2);
}
console.log(fibonacci(5));


const arr3 = ["I", "was", "a", "car"];
let sum = 0;
arr3.map(e => e.length).map(e => e * 3).forEach(e => sum += e);
console.log(sum)