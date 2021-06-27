const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    console.log("Error request received");
    res.json({ message: "Oops! This page is unavailable" });
});

module.exports = router;
