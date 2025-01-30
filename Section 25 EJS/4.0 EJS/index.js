import express from "express";

import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    const dayOfWeek = new Date().getDay();

    let day = "the weekend";
    let advice = "have fun";

    if (dayOfWeek > 0 && dayOfWeek < 6) {
        day = "a weekday";
        advice = "work hard";
    }
    let output = {
        dayType: day,
        advice: advice,
    };
    res.render("index.ejs", {output: output});
});

app.listen(port, () => {
    console.log("App started on port " + port);
});
