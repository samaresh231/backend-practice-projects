const { urlencoded } = require("express");
const express = require("express");
const app = express();
const bcrypt = require('bcrypt');
const mongoose = require("mongoose");
const User = require('./models/user');

app.set("view engine", "ejs");
app.use(urlencoded({extended: true}));

mongoose.connect("mongodb://localhost/authDemo", {
    useCreateIndex: true, 
    useUnifiedTopology: true
}).then(() => {
    console.log("connected to db");
}).catch((err) => {
    console.log(err);
})

app.get("/", (req, res) => {
    res.send("Welcome to my project");
})

app.post("/register", async (req, res) => {
    const {username, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);
    await User.create({
        username: username,
        password: hashedPassword
    })
    res.redirect("/login");
})

app.get("/register", (req, res) => {
    res.render("register");
})

app.get("/login", (req, res) => {
    res.render("login");
})

app.post("/login", (req, res) => {
    const {username, password} = req.body;
    User.findOne({username: username}, async (err, foundUser) => {
        if(err)
            console.log(err);
        else{
            if(foundUser.password){
                const isLogin = await bcrypt.compare(password, foundUser.password);
                if(isLogin)
                    res.redirect("/secret");
                else
                    res.send("Incorrect username or password");
            }
            else
                res.send("Incorrect username or password")
        }
    })
    
})

app.get("/secret", (req, res) => {
    res.send("Secret Page");
})

app.listen(3000, () => {
    console.log("listening to port 3000");
})
