const express = require("express");
const restaurants = require("./restaurants");
const sections = require("./sections");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/restaurants", restaurants);
router.use("/sections", sections);

module.exports = router;