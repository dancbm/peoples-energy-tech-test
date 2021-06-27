const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    console.log("API test request received");
    res.json({ message: "The server says hello!" });
});

module.exports = router;
