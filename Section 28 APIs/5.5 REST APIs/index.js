import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import {
    username,
    password,
    apiKey,
    bearerToken,
} from "../5.4 API Authentication/api_keys.js";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

// HINTs: Use the axios documentation as well as the video lesson to help you.
// https://axios-http.com/docs/post_example
// Use the Secrets API documentation to figure out what each route expects and how to work with it.
// https://secrets-api.appbrewery.com/

//TODO 1: Add your own bearer token from the previous lesson.
const yourBearerToken = bearerToken;
const config = {
    headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs", { content: "Waiting for data..." });
});

app.post("/get-secret", async (req, res) => {
    const searchId = req.body.id;
    try {
        const result = await axios.get(
            API_URL + "/secrets/" + searchId,
            config
        );
        res.render("index.ejs", { content: JSON.stringify(result.data) });
    } catch (error) {
        console.log(error.message);
        res.render("index.ejs", {
            content: JSON.stringify(error.response.data),
        });
    }
});

app.post("/post-secret", async (req, res) => {
    // TODO 2: Use axios to POST the data from req.body to the secrets api servers.
    const newSecret = req.body;
    console.log(newSecret);
    try {
        const result = await axios.post(
            API_URL + "/secrets/",
            newSecret,
            config
        );
        res.render("index.ejs", { content: JSON.stringify(result.data) });
    } catch (error) {
        console.log(error.message);
        res.render("index.ejs", {
            content: JSON.stringify(error.response.data),
        });
    }
});

app.post("/put-secret", async (req, res) => {
    const searchId = req.body.id;
    // TODO 3: Use axios to PUT the data from req.body to the secrets api servers.
    const replaceSecret = req.body;
    console.log(replaceSecret);
    try {
        const result = await axios.put(
            API_URL + "/secrets/" + searchId,
            replaceSecret,
            config
        );
        res.render("index.ejs", { content: JSON.stringify(result.data) });
    } catch (error) {
        console.log(error.message);
        res.render("index.ejs", {
            content: JSON.stringify(error.response.data),
        });
    }
});

app.post("/patch-secret", async (req, res) => {
    const patchId = req.body.id;
    // TODO 4: Use axios to PATCH the data from req.body to the secrets api servers.
    const patchSecret = req.body;
    console.log(patchSecret);
    try {
        const result = await axios.patch(
            API_URL + "/secrets/" + patchId,
            patchSecret,
            config
        );
        console.log(result.data.newData);
        res.render("index.ejs", {
            content: JSON.stringify(result.data.newData),
        });
    } catch (error) {
        console.log(error.message);
        res.render("index.ejs", {
            content: JSON.stringify(error.response.data),
        });
    }
});

app.post("/delete-secret", async (req, res) => {
    const deleteId = req.body.id;
    // TODO 5: Use axios to DELETE the item with searchId from the secrets api servers.
    try {
        const response = await axios.delete(
            API_URL + "/secrets/" + deleteId,
            config
        );
        console.log(response);
        res.render("index.ejs", { content: `ID ${deleteId} has been deleted` });
    } catch (error) {
        console.log(error.message);
        res.render("index.ejs", { content: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
