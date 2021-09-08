// 선언, 초기화
let user = "Go";
const height = 180;
console.log(user);
console.log(height);

let numOfStudents = 65;
numOfStudents -= 1;


// 변수 타입

// number
let numberOfStudents = 1;
let pi = 3.14;
let revenue = -300;
let zero = 0;
console.log(typeof numOfStudents);

// string
let str = "hello";
let str2 = "hello2";
console.log(str + str2);
console.log(str.length);
console.log(str.substr(0, 2));
console.log(str.slice(0, 3));

// boolean
f = () => {
    return true
}
console.log(f());

// array
let arr = [1, 2, 3, 4, 5];
let arr2 = [1, "a", false];
console.log(arr);
console.log(arr2);

arr2[0] = 0;
console.log(arr2);

// object
let obj = {
    name: "Jin",
    age: 23,
    height: 185,
}
console.log(obj);
console.log(obj.age);

const student1 = {
    name: "Karry",
    age: 24,
    height: 162,
}
const student2 = {
    name: "Kim",
    age: 24,
    height: 162,
}
const students = [student1, student2];
console.log(students);

// 조건문
const testArr = [1, 2, 3];

if (testArr.length > 4) {
    console.log("testArr's length is larger than 4.");
} else if (testArr.length === 3) {
    console.log("testArr's length is 3.")
} else {
    console.log(testArr);
}

// 반복문 & 재어문
let i = 0;
while (i < 10) {
    console.log(i);
    i += 1;
}
for (let j = 0; i < 10; j++) {
    console.log(j)
}

const result = [];
for (let i = 0; i < 10; i++) {
    result.push(i);
}
console.log(result);

while (result.length > 0) {
    if (result.length > 4) {
        console.log("result's length is larger than 4.");
    } else if (result.length === 3) {
        console.log("result's length is 3.")
    } else {
        console.log(result);
    }
    result.pop();
}