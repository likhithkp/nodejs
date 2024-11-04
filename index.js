const express = require("express");
const app = express();

app.use(express.json());
app.use(express({urlencoded: true}));

app.get("/", (req, res) => {
    res.send("Welcome");
});

app.get("/profile", (req, res, next) => {
    return next(new Error("Sorry somthing broke"))
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send("Something broke...!");
});

app.listen(3000, () => {
    console.log("Server listening...");
});