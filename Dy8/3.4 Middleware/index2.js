import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(morgan("short"));

app.get("/", (req, res) => {  //server handlers
  res.send("Hello");
});

app.listen(port, () => {   //server handlers
  console.log(`Listening on port ${port}`);
});
