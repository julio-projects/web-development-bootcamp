import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const secretsApiEndpoint = "https://secrets-api.appbrewery.com/random";
const tempSecret = {
    secret: "Temp Secret",
    user: "Temp User",
};

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        let response = await axios.get(secretsApiEndpoint);

        res.render("index.ejs", {
            user: response.data.username,
            secret: response.data.secret,
        });
    } catch (error) {
        console.log(error.response.data);
        res.render("index.ejs", {
            secret: "",
            user: "Could not get secret. Refresh to try again",
        });
    }
});

app.listen(port, () => {
    console.log(`App running on port: ${port}`);
});
