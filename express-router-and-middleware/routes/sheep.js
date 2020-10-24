const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("viewing all sheeps");
})

router.get("/:id", (req, res) => {
    res.send("viewing one sheep");
})

router.get("/:id/edit", (req, res) => {
    res.send("editing one sheep");
})

module.exports = router;