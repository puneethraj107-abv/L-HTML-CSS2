import express from "express";

const app = express();
const port = 3000;

app.set("view engine", "ejs");//add this line while using ejs

app.get("/", (req, res) => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    // console.log(dayOfWeek);
    let d_type = "a weekday";
    let adv = "let's have some fun";
    if (dayOfWeek === 0 || dayOfWeek === 6) {
        d_type = "the weekend";
        adv = "let's have some more fun";
    }
    res.render("index", {
        dayType: d_type,
        advice: adv,
    });
});

app.listen(port, () => {
    console.log(`server listening from port ${port}`);
});
