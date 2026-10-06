import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));//need the body parser express middleware to access the body elemets from submit

app.get("/", (req, res) => {
  let text = "welcome to the website";

  res.render("index.ejs");

});

app.post("/submit", (req, res) => {
  const text = req.body["fName"] + req.body["lName"];
  const l_text = text.length; //can't believe i spent 15 minutes on debugging the problem because i got the spelling of "length" wrong 
  res.render("index.ejs", { num_letters: l_text });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
