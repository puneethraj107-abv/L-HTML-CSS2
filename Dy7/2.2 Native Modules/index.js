const fs = require("fs");
fs.writeFile("message.txt", "hello from node.js", (err) => {
    if (err) throw err;
    console.log("success MF")
});

fs.readFile('./message.txt', "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
}); 