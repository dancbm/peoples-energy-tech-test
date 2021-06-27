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

const planetRoutes = require("./routes/planets");
const apiRoutes = require("./routes/api");
const errorRoutes = require("./routes/error");

app.use(cors({ origin: `http://${clientHost}:${clientPort}` }));

app.use("/planets", planetRoutes);
app.use("/api", apiRoutes);

app.get("/", (req, res) => {
    res.redirect("/planets");
});

app.use("/*", errorRoutes);

app.listen(port, () => {
    console.log(`Server started at ${host}:${port}`);
});
