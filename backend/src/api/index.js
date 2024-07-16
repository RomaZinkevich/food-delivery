const express = require("express");
const restaraunts = require("./restaraunts");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Hello API",
  });
});

router.use("/restaraunts", restaraunts);

module.exports = router;