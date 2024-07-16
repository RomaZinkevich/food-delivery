const express = require("express");
const router = express.Router();
const { getAllRestaraunts } = require("../db/restarauntdb");

// @desc Gets all Restaraunts
// @route GET /api/restaraunts
// @access Public
router.get("/", async (req, res, next) => {
        const result = await getAllRestaraunts();
        console.log(result)
        return res.json(result);
  });

module.exports = router;