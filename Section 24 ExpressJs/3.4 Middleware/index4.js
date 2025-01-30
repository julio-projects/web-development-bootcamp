import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

app.post("/submit", (req, res) => {
    res.send(
        `<h1>Your band name is</h1><h2>${req.body.street} ${req.body.pet}</h2>`
    );
});

app.get("/", (req, res) => {
    res.sendFile(join(__dirname, "public/index.html"));
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
