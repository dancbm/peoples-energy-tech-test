const express = require("express");
const celestialData = require("../data/data.json");
const router = express.Router();

router.get("/", (req, res) => {
    console.log("Request for planets received");
    res.json(celestialData);
});

module.exports = router;
