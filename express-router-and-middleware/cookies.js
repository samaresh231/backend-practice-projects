const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.get("/" , (req, res) => {
    // console.log(req.cookies);
    res.send(`Welcome to my project ${req.cookies.name}`);
})

app.get("/cookie", (req, res) => {
    res.cookie("name","samaresh");
    res.send("Your cookie is saved");
})

app.listen(3000, ()=> {
    console.log("listening to port 3000");
})