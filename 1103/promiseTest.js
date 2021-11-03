const axios = require("axios");

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("foo");
    }, 1000)
})

axios.get("http://naver.com")
    .then((res) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("bar");  // reject 로 상태 바꾸기 (실패처리 하기)
            }, 1000);
        })
    })
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.error(err);
    })

const func1 = async () => {
    try {
        const axiosRes = await axios.get("https://github.com");
        console.log(axiosRes.status);
        return axiosRes.status;
    } catch (e) {
        console.log(e);
    }
}
func1();
