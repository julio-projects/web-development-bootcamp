import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello, World2!</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>My name is Julio</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>HMU at +1 555 123 4567</h1>");
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

// app.get("/", (req, res) => {
//   res.send("<h1>Hello</h1>");
// });

// app.get("/about", (req, res) => {
//   res.send("<h1>About Me</h1><p>My name is Angela</p>");
// });

// app.get("/contact", (req, res) => {
//   res.send("<h1>Contact Me</h1><p>Phone: +44123456789</p>");
// });
