const express = require("express");
const axios = require("axios");
const app = express();

app.get("/", (req, res) => {
    const url = req.query.url | "";
    axios
        .get(url)
        .then((response) => {
            res.send(response.data);
        })
        .catch((error) => {
            res.send(error.message);
        });
});

app.listen(process.env.PORT || 5000, () => console.log("Server is running..."));
