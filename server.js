const express = require("express");
const path = require("path");
let port = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.get("/projects-and-work", (req, res) => {
  res.sendFile(path.join(__dirname, "./projects.html"));
});

app.listen(port, () => {
  console.log("app started!");
});
