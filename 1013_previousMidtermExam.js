// && ||
let a = 0;
const increment = () => {
    a += 1;
    return true;
}
if (3 < 2 && increment()) {
    console.log("HI");
}
console.log(a);

// 3 if 문의 shortcut
let b = 2;
let c = 0;
b > 3 ? c += 1 : c += 2;  // 조건문 ? true 일 때 : false 일 때
