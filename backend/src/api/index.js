const express = require("express");
const restaurants = require("./restaurants");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Hello API",
  });
});

router.use("/restaurants", restaurants);

module.exports = router;