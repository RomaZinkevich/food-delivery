const pool = require("./dbconfig");
const SectionError = require('../utils/SectionError');
const ProductError = require('../utils/ProductError');

//@desc Gets all Sections
const getAllSections = async () => {
    const query = `SELECT * FROM "Section";`;
    try {
        let result = await pool.query(query);
        return result.rows;
    } catch (error) {
        console.log(error)
        throw new SectionError("SectionDatabaseError", "Unexpected database error");
    }
};

//@desc Gets Section by ID
const getSection = async (id) => {
    const query = `SELECT * FROM "Section" WHERE id=${id}`;
    try {
        let result = await pool.query(query);
        if (result.rowCount === 0)
            throw new SectionError("SectionError", "Section ID Not Found");
        return result.rows[0];
    } catch (error) {
        throw new SectionError("SectionDatabaseError", error.details ? error.details : "Unexpected database error");
    }
}

//@desc Gets Products by Section_id
const getProducts = async (id) => {
    const query = `SELECT * FROM "Product" WHERE section_id=${id}`;
    try {
        let result = await pool.query(query);
        if (result.rowCount === 0)
            throw new SectionError("SectionError", "Section ID Not Found");
        return result.rows;
    } catch (error) {
        throw new ProductError("ProductDatabaseError", error.details ? error.details : "Unexpected database error");
    }
}

module.exports = {
    getAllSections: getAllSections,
    getSection: getSection,
    getProductsBySection: getProducts
};