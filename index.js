// create an express app
const express = require("express");
const axios = require("axios");
const app = express();

app.use(express());

app.get("/c/:channel", function (req, res) {
    let channel = req.params.channel || "ptv-sports";
    axios
        .get("https://streamia.xyz/embed/" + channel, {
            headers: {
                Referer: "https://sportshd.co"
            }
        })
        .then(function (response) {
            let data = response.data;
            data = data.replace(
                `</style>`,
                `
		.container:after {
            content: "Website made by Shah Fahad";
            position: absolute;
            bottom: 0;
            width: 100vw;
            font-size: 12px;
            right: 0;
            color: rgba(255, 255, 255, 0.5);
            z-index: 99;
            font-family: Arial, Helvetica, sans-serif;
		}
			</style>`
            );
            res.send(data);
        })
        .catch(function (err) {
            res.send(err.message);
        });
});

app.listen(process.env.PORT || 5000, () =>
    console.log("SERVER STARTED AT PORT 5000")
);
