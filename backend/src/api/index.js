const express = require("express");
const restaurants = require("./restaurants");
const sections = require("./sections");
const products = require("./products");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/restaurants", restaurants);
router.use("/sections", sections);
router.use("/products", products);

module.exports = router;