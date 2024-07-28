const express = require("express");
const restaurants = require("./restaurants");
const sections = require("./sections");
const products = require("./products");
const users = require("./users");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/restaurants", restaurants);
router.use("/sections", sections);
router.use("/products", products);
router.use("/users", users);

module.exports = router;