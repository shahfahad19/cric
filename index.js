const express = require("express");
const axios = require("axios");
const app = express();

app.get("/", (req, res) => {
    res.send("HEllo");
});

app.listen(process.env.PORT || 5000, () => console.log("Server is running..."));
