const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("viewing all dogs");
})

router.get("/:id", (req, res) => {
    res.send("viewing a single dog");
})

router.get("/:id/edit", (req, res) => {
    res.send("editing a single dog");
})

module.exports = router;