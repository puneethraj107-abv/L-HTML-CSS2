import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));// to generate path to file in both local dev-env and server dev-env

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));// It parses URL-encoded form data from incoming requests and makes it available through req.body

app.get("/", (req, res) => {
  // console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
