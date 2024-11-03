const express = require("express");
const app = express();

app.use((req, res, next) => {
    console.log("Middleware trigerred");
    next();
});

app.get("/", (req, res) => {
    res.send("Hello");
});

app.get("/profile", (req, res, next) => {
    return next(new Error("Sorry this page is not available for time being!"))
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!!");
});

app.listen(3000, () => {
    console.log("Server running");
});