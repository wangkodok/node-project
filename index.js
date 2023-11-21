const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("views", path.join(__dirname, "/"));
app.set("view engine", "ejs");

const data = [
  {
    language: "JavaScript",
    lv: null,
  },
  {
    language: "Node",
    lv: null,
  },
  {
    language: "React",
    lv: null,
  },
  {
    language: "TypeScript",
    lv: null,
  },
];

app.get("/", (req, res) => {
  res.render("start", { data });
});

app.get("/intro", (req, res) => {
  res.render("intro");
});

app.get("/new", (req, res) => {
  res.render("new");
});

app.post("/", (req, res) => {
  const { language } = req.body;
  data.push({ language });
  // res.send("work");
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("on post 3000");
  console.log("http://localhost:3000/");
});
