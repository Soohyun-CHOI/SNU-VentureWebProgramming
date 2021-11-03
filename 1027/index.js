const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.urlencoded({extended: true}));  // body-parser: 바디에 담은 내용을 어떻게 읽을 건지 express 에게 알려주
app.use(express.json())  // body-parser
const port = 3000;

const postsFilePath = "/Users/soohyun-choi/Desktop/dev/SNU_webProgramming/1027/post.json";
const posts = JSON.parse(fs.readFileSync(postsFilePath, "utf-8"));
console.log(posts);

// 글 목록 보여주기 Read
app.get("/posts", (req, res) => {
    res.send(posts.filter(post => !post.isDeleted).map(({id, title, description, isDeleted}) => {
        return {
            id, title
        }
    }));
});

// 글 작성하기 Create
app.post("/posts", (req, res) => {
    const {title, description} = req.body;
    const post = {
        title,
        description,
        id: posts.length + 1,
    }
    posts.push(post);
    fs.writeFileSync(postsFilePath, JSON.stringify(posts));
    res.send(post);
})

// 작성 글 보기 Read
app.get("/posts/:id", (req, res) => {
    const {id} = req.params;
    const post = posts.find(e => e.id === parseInt(id));
    if (post) {
        fs.writeFileSync(postsFilePath, JSON.stringify(posts));
        res.send(post);
    }
    else
        res.sendStatus(404);

})

// 작성 글 삭제하기 Delete
app.delete("/posts/:id", (req, res) => {
    const {id} = req.params;
    const post = posts.find(e => e.id === parseInt(id));
    post.isDeleted = true;

    fs.writeFileSync(postsFilePath, JSON.stringify(posts));
    res.send(post);
})

// 작성 글 수정하기 Update
app.put("/posts/:id", (req, res) => {
    const {id} = req.params;
    const post = posts.find(e => e.id === parseInt(id));
    const {title, description} = req.body;
    post.title = title;
    post.description = description;

    fs.writeFileSync(postsFilePath, JSON.stringify(posts));
    res.send(post);
})

app.listen(port, () => {
    console.log(`listening at port: ${port}...`);
})
