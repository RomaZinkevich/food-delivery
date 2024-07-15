const express = require("express");
const cors = require('cors');
const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

module.exports = app;