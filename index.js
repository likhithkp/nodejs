const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")))

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/profile/:name", (req, res) => {
    const {name} = req.params
    res.send(`Welcome ${name}`);
});

app.listen(3001, () => {
    console.log("Server running...!");
});