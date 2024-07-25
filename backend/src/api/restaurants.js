const express = require("express");
const router = express.Router();
const { tryCatch } = require("../utils/tryCatch");
const { getAllRestaurants } = require("../db/restaurantdb");

// @desc Gets all Restaurants
// @route GET /api/restaurants
// @access Public
router.get("/",
    tryCatch(async (req, res, next) => {
            const result = await getAllRestaurants();
            return res.json(result);
}));

module.exports = router;