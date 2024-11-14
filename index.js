const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

app.use(cookieParser());

app.get("/", (_, res) => {
    res.cookie("name", "likhithkp");
    res.send("Hello");
});

app.get("/passwd", (_, res) => {
    bcrypt.genSalt(10, (_, salt) => {
        bcrypt.hash("likhithkp1234", salt, (_, hash) => {
            console.log(hash)
            res.cookie("password", hash);
            res.send("Successfully pswd set...");
        });
    });
});

app.get("/verify", (_, _) => {
    bcrypt.compare("likhithkp1234", "$2b$10$foqyDYroDSUI2bV2AnSPKOp2JhPSsLo.ErLatG4UuclHXDjZ6OwGG", (_, result) => {
        console.log(result);
    });
});

app.get("/jwt", (_, res) => {
    let token = jwt.sign({email : "likhithkpdev@gmail.com"}, "secretKey");
    res.cookie("jwtToken", token);
    res.send("JWT signed...");
});

app.get("/jwtVerify", (req, res) => {
    let verify = jwt.verify(req.cookies.jwtToken, "secretKey");
    res.send(verify);
});

app.listen(3000, () => {
    console.log("Server listening...");
});