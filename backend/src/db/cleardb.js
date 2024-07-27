const pool = require("./dbconfig");

const clearDB = async () => {
    const query = `DELETE FROM "Ordered_Product"; DELETE FROM "Product"; DELETE FROM "Section"; DELETE FROM "Restaurant"; DELETE FROM "User";`
    try {
        await pool.query(query);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    clear: clearDB
};