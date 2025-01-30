import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import morgan from "morgan";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(morgan("common"));

app.post("/submit", (req, res) => {
    console.log(req.body);
    res.send(
        `<h1>WE ARE ${req.body.street} ${req.body.pet}</h1><h2>1, 2, 3, 4</h2>`
    );
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
