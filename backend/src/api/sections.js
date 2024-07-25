const express = require("express");
const router = express.Router();
const { getAllSections, getSection } = require("../db/sectiondb");

// @desc Gets all Sections
// @route GET /api/sections
// @access Public
router.get("/", async (req, res, next) => {
        const result = await getAllSections();
        return res.json(result);
});

// @desc Gets Section by ID
// @route GET /api/sections/:id
// @access Public
router.get("/:id", async (req, res, next) => {
        const id = req.params.id;
        const result = await getSection(id)
        return res.json(result);
})

module.exports = router;