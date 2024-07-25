const express = require("express");
const router = express.Router();
const { tryCatch } = require("../utils/tryCatch");
const { getAllProducts, getProduct } = require("../db/productdb");

// @desc Gets all Products
// @route GET /api/products
// @access Public
router.get("/",
    tryCatch(async (req, res, next) => {
        const result = await getAllProducts();
        return res.json(result);
}));

// @desc Gets Product by ID
// @route GET /api/products/:id
// @access Public
router.get("/:id",
    tryCatch(async (req, res, next) => {
            const id = req.params.id;
            const result = await getProduct(id)
            return res.json(result);
}));

module.exports = router;