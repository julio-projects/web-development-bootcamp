import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
let file = "";

var checkPassword = function (req, res, next) {
    const password = req.body.password;
    file =
        password === "ILoveProgramming"
            ? join(__dirname, "/public/secret.html")
            : join(__dirname, "/public/index.html");
    next();
};

app.use(express.urlencoded({ extended: true }));
app.use(checkPassword);

app.post("/check", (req, res) => {
    res.sendFile(file);
});

app.get("/", (req, res) => {
    res.sendFile(join(__dirname, "/public/index.html"));
});

app.listen(port, (req, res) => {
    console.log(`Listening to port ${port}`);
});

//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
