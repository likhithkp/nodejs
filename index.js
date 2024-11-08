const express = require("express");
const app = express();
const path = require("path")

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')))

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.send("Welcome");
});

app.get("/home", (req, res) => {
    res.render("index");
});

app.get("/profile/:username", (req, res) => {
    const {username} = req.params;
    res.send(`Welcome ${username}`);
});

app.listen(3003, () => {
    console.log("Server running");
});