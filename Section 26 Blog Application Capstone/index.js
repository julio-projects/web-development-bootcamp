import express from "express";
import { endianness } from "os";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    createId();
    res.render("index.ejs", allBlogs);
});

app.get("/addblog", (req, res) => {
    res.render("editblog.ejs");
});

// Called when a user wants to create a new blog
app.post("/createblog", (req, res) => {
    req.body["id"] = createId();
    console.log(req.body);
    allBlogs.blogs.push(req.body);
    console.log(allBlogs);

    console.log(`Created a new blog: ${req.body.title}`);
    // res.render("index.ejs", allBlogs);
    res.redirect("/");
});

// Called when a user wants to save changes to a blog
app.post("/saveblog", (req, res) => {
    let id = Number(req.body.id);
    for (let i = 0; i < allBlogs.blogs.length; i++) {
        allBlogs.blogs[i];
        if (allBlogs.blogs[i].id === id) {
            allBlogs.blogs[i].title = req.body.title;
            allBlogs.blogs[i].content = req.body.content;
        }
    }
    console.log(`Changes have been made to blog: ${req.body.title}`);
    // res.render("index.ejs", allBlogs);
    res.redirect("/");
});

// Called when a user clicks the 'edit' button on one of the blogs
app.post("/editblog", (req, res) => {
    let id = Number(req.body.id);
    let post;
    for (let i = 0; i < allBlogs.blogs.length; i++) {
        if (allBlogs.blogs[i].id === id) {
            post = allBlogs.blogs[i];
        }
    }

    console.log(`Now editing blog: ${post.title}`);
    res.render("editblog.ejs", post);
});

// Called when a user clicks the 'delete' button on one of the blogs
app.post("/deleteblog", (req, res) => {
    console.log(`Deleted blog: ${req.body.id}`);
    allBlogs.blogs = allBlogs.blogs.filter((blog) => {
        return blog.id !== Number(req.body.id);
    });

    res.redirect("/");
});

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});

var allBlogs = {
    blogs: [
        {
            id: 1,
            title: "First Blog",
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reprehenderit at veniam nulla assumenda praesentium hic aliquid odio, optio quidem? Itaque dolorem veritatis iure libero minima. Necessitatibus dolorem dicta quod?",
        },
        {
            id: 2,
            title: "Second Blog",
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reprehenderit at veniam nulla assumenda praesentium hic aliquid odio, optio quidem? Itaque dolorem veritatis iure libero minima. Necessitatibus dolorem dicta quod?",
        },
    ],
};

var createId = function (allIds) {
    function datestring(time) {
        return Number(
            new Date(time.getTime())
                .toISOString()
                .replace(/-/g, "")
                .replace(/:/g, "")
                .replace(/[A-Z]/g, "")
                .replace(/\./g, "")
        );
    }

    return datestring(new Date());
};
