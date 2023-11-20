const express = require("express");
const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "/"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("start");
});

app.listen(3000, () => {
  console.log("on post 3000");
  console.log("http://localhost:3000/");
});
