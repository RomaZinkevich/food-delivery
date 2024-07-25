const express = require("express");
const router = express.Router();
const { tryCatch } = require("../utils/tryCatch");
const { getAllSections, getSection, getProductsBySection } = require("../db/sectiondb");

// @desc Gets all Sections
// @route GET /api/sections
// @access Public
router.get("/",
    tryCatch(async (req, res, next) => {
        const result = await getAllSections();
        return res.json(result);
}));

// @desc Gets Section by ID
// @route GET /api/sections/:id
// @access Public
router.get("/:id",
    tryCatch(async (req, res, next) => {
        const id = req.params.id;
        const result = await getSection(id);
        return res.json(result);
}));

// @desc Gets Products by Section_id
// @route GET /api/sections/:id/products
// @access Public
router.get("/:id/products",
    tryCatch(async (req, res, next) => {
        const id = req.params.id;
        const result = await getProductsBySection(id);
        return res.json(result);
}));

module.exports = router;