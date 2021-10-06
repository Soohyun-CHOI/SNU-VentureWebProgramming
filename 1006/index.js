// module 불러오기
const axios = require("axios");
const cheerio = require("cheerio");

// html 파일 가져오기 + 읽어오기
axios.get("https://github.com/pricing")
    .then(res => {
        const $ = cheerio.load(res.data);
        $(".js-computed-value").each(function () {
            console.log($(this).text());
        });
    })
