const express = require("express");
const app = express();
const path = require("path");
const { v4: uuid } = require("uuid");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("views", path.join(__dirname, "/"));
app.set("view engine", "ejs");

const data = [
  {
    id: uuid(),
    language: "JavaScript",
    lv: null,
  },
  {
    id: uuid(),
    language: "Node",
    lv: null,
  },
  {
    id: uuid(),
    language: "React",
    lv: null,
  },
  {
    id: uuid(),
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
  data.push({ language, id: uuid() });
  // res.send("work");
  res.redirect("/");
});

app.get("/language/:id", (req, res) => {
  const { id } = req.params;
  const dataResult = data.find((element) => {
    return element.id === id;
  });
  res.render("language", { dataResult });
});

app.listen(3000, () => {
  console.log("on post 3000");
  console.log("http://localhost:3000/");
});
