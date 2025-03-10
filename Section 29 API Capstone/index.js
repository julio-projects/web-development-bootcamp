import express from "express";
import axios from "axios";
import { format, addDays } from "date-fns";
import { NASA_API_KEY } from "./api_keys.js";

const app = express();
const port = 3000;
const API_URL = "https://api.nasa.gov/planetary/apod";
const debug = true;
var officialLink = "https://apod.nasa.gov/apod/ap250214.html";

var date = { 
    year: 1995,
    month: "January",
    day: 1,
};


const months = [
    "",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Auguest",
    "September",
    "October",
    "November",
    "December",
];

var updateDate = function (prevDate, responseData) {
    let newDate = responseData.date;
    let year = newDate.substring(0, 4);
    let month = newDate.substring(5, 7);
    let day = newDate.substring(8, 10);

    officialLink = `https://apod.nasa.gov/apod/ap${year.substring(2,5)}${month}${day}.html`;
    prevDate.year = year;
    prevDate.month = months[Number(month)];
    prevDate.day = day;
};

var indexMonth = function(m) {
    return months.indexOf(m) - 1;
}

var log = function(l) {
    if (debug) {
        console.log(l);
    }
}

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const result = await axios.get(API_URL, {
            params: {
                api_key: NASA_API_KEY,
            },
        });
        log(result.data)
        updateDate(date, result.data);
        res.render("index.ejs", {
            data: result.data,
            date: date,
            link: officialLink,
        });
    } catch (error) {
        console.log(error.response.data);
        res.redirect("/");
    }
});

app.get("/tomorrow", async (req, res) => {
    try {
        let tomorrow = addDays(new Date(date.year, indexMonth(date.month), date.day), 1);
        const result = await axios.get(API_URL, {
            params: {
                api_key: NASA_API_KEY,
                date: format(tomorrow, "yyyy-MM-dd")
            },
        });
        updateDate(date, result.data);
        log(result.data)
        res.render("index.ejs", {
            data: result.data,
            date: date,
            link: officialLink,
        });
    } catch (error) {
        log(error.response.data);
        res.redirect("/");
    }
});

app.get("/yesterday", async (req, res) => {
    try {
        let tomorrow = addDays(new Date(date.year, indexMonth(date.month), date.day), -1);
        const result = await axios.get(API_URL, {
            params: {
                api_key: NASA_API_KEY,
                date: format(tomorrow, "yyyy-MM-dd")
            },
        });
        updateDate(date, result.data);
        log(result.data)
        res.render("index.ejs", {
            data: result.data,
            date: date,
            link: officialLink,
        });
    } catch (error) {
        log(error.response.data);
        res.redirect("/");
    }
});

app.get("/random-date", async (req, res) => {
    try {
        const result = await axios.get(API_URL, {
            params: {
                count: 1,
                api_key: NASA_API_KEY,
            },
        });
        log(result.data);
        updateDate(date, result.data[0]);
        res.render("index.ejs", {
            data: result.data[0],
            date: date,
            link: officialLink,
        });
    } catch (error) {
        console.log(error.response.data);
        res.redirect("/");
    }
});

app.post("/request-date", async (req, res) => {
    try {
        const newDate = req.body;
        const result = await axios.get(API_URL, {
            params: {
                date: `${newDate.year}-${newDate.month}-${newDate.day}`,
                api_key: NASA_API_KEY,
            },
        });
        updateDate(date, result.data);
        log(result.data);
        res.render("index.ejs", {
            data: result.data,
            date: date,
            link: officialLink,
        });
    } catch (error) {
        console.log(error.response.data);
        res.redirect("/");
    }
});

app.listen(port, () => {
    console.log("App running on port " + port);
});
