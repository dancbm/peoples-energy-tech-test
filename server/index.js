const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const app = express();

const host = process.env.PRODUCTION ? process.env.SERVER_HOST : "localhost";
const port = process.env.PRODUCTION ? process.env.SERVER_PORT : 3001;
const clientHost = process.env.PRODUCTION
    ? process.env.CLIENT_HOST
    : "localhost";
const clientPort = process.env.PRODUCTION ? process.env.CLIENT_PORT : 3000;

app.use(cors({ origin: `http://${clientHost}:${clientPort}` }));

app.get("/api", (req, res) => {
    res.json({ message: "The server says hello!" });
});

app.listen(port, () => {
    console.log(`Server started at ${host}:${port}`);
});
