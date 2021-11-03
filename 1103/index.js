// < 비동기 처리 (asynchronous) >


// [0] 비동기 처리되는 함수 예시 (함수 시작이 비동기적으로 되고, 함수 내부는 동기적으로 실행)
setTimeout(() => console.log(1), 1000);
// setInterval(() => console.log(2), 1000);  // 1초마다 실행


// [1] callback 함수의 문제: 앞부분 실행이 끝나고 실행되는 함수
const fs = require("fs");
const fileName = "./data.txt";

// BUT 아래처럼 짜는 건 별로인 코드: indentation 이 많은 건 좋지 않다 (에러 처리가 깔끔하지 않고, 논리적 흐름 따라가기 힘듦)
fs.writeFile("./data.txt", "Hello", (err, result) => {
    // 파일에 data 넣고 나면 callback 함수 실행 (콜백 함수는 기본적으로 err, result 파라미터)
    if (err !== null) {
        console.error(err);
        return;
    }

    // readFile 함수를 밖에 두면 비동기 처리 > 반드시 쓰기를 완료하고 읽는다는 보장이 없음!
    fs.readFile(fileName, "utf-8", (err, data) => {
        if (err !== null) {
            console.error(err);
            return;
        }
        console.log(data)

        // 파일 삭제하기
        fs.unlink(fileName, (err) => {
            if (err != null) {
                console.log(err);
                return;
            }
        })
    })
})


// [2] Promise 오브젝트: 가장 많이 사용
const axios = require("axios");
const texts = [];

const axiosPromise = axios.get("https://github.com/")
    .then((res) => {  // resolve
        texts.push(res.data.length);
        return axios.get("http://naver.com/");
    })
    .then((res) => {
        texts.push(res.data.length);
        console.log(texts);
    })
    .catch(err => {  // reject
        console.error(err);
    })
console.log(axiosPromise);


// [3] async await (promiseTest.js 참조)
const func1 = async () => {
    const texts = [];
    try {
        texts.push((await axios.get("https://github.com")).data.length);
        texts.push((await axios.get("http://naver.com")).data.length);
    } catch (e) {
        console.error(e);
    }
    console.log(`async await 사용: ${texts}`);
}
func1();

const func2 = () => {
    const urls = ["https://naver.com", "https://github.com", "https://fmkorea.com"];
    Promise.all(urls.map(url => axios.get(url)))
        .then(res => {
            console.log(res.map(e => e.data.length));
        })
}
func2();