const pool = require("./dbconfig");
const ProductError = require('../utils/ProductError');

//@desc Gets all Products
const getAllProducts = async () => {
    const query = `SELECT * FROM "Product";`;
    try {
        let result = await pool.query(query);
        return result.rows;
    } catch (error) {
        throw new ProductError("ProductDatabaseError", "Unexpected database error");
    }
};

//@desc Gets Products by Section_id
const getProduct = async (id) => {
    const query = `SELECT * FROM "Product" WHERE id=${id}`;
    try {
        let result = await pool.query(query);
        if (result.rowCount === 0)
            throw new ProductError("ProductError", "Product ID Not Found");
        return result.rows[0];
    } catch (error) {
        throw new ProductError("ProductDatabaseError", error.details ? error.details : "Unexpected database error");
    }
}

module.exports = {
    getAllProducts: getAllProducts,
    getProduct: getProduct
};