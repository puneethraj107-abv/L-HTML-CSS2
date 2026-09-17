import express from 'express';
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>hello, World</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About </h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h2> Puneeth R - 9148172997 </h2>");
});

app.listen(port, () => {
    console.log(`server has started from port ${port}`);
});