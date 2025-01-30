import exp from "constants";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var customMiddleware = function (req, res, next) {
    console.log(`Request Method: ${req.method}`);
    console.log(`Request URL: ${req.url}`);
    console.log("\n");
    next();
};

app.use(customMiddleware);

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    console.log(res);
    res.send("Hello");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
