const fs = require("fs");

fs.writeFile("hell.txt", "Hello world", (err) => {
    if (err) console.error(err);
    else console.log("File created");
});