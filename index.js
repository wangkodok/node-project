const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuid } = require("uuid");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.set("views", path.join(__dirname, "/"));
app.set("view engine", "ejs");

let data = [
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

app.get("/language/:id/edit", (req, res) => {
  const { id } = req.params;
  const dataResult = data.find((element) => {
    return element.id === id;
  });
  res.render("edit", { dataResult });
});

app.patch("/language/:id", (req, res) => {
  const { id } = req.params;
  const languageChange = req.body.language;
  const dataResult = data.find((element) => {
    return element.id === id;
  });
  dataResult.language = languageChange;
  res.redirect("/");
  // res.redirect(`/language/${dataResult.id}`);
});

app.delete("/language/:id", (req, res) => {
  const { id } = req.params;
  data = data.filter((element) => {
    return element.id !== id;
  });
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("on post 3000");
  console.log("http://localhost:3000/");
});
