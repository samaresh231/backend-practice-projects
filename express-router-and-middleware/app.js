const express = require('express');
const app = express();
const dogRoutes = require("./routes/dogs");
const sheepRouter = require("./routes/sheep");

app.get("/dogs", (req, res) => {
    res.send("You are beautiful");
})

app.use("/", dogRoutes);
app.use("/sheep", sheepRouter);

app.listen(3000, () => {
    console.log('listening to port 3000');
})