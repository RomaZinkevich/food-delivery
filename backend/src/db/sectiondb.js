const pool = require("./dbconfig");

//@desc Gets all Sections
const getAllSections = async () => {
    const query = `SELECT * FROM "Section";`;
    try {
        let result = await pool.query(query);
        if (result.rowCount === 0)
            return "Nothing";
        return result.rows;
    } catch (error) {
        console.log(error.message);
    }
};

//@desc Gets Section by ID
const getSection = async (id) => {
    const query = `SELECT * FROM "Section" WHERE id=${id}`;
    try {
        let result = await pool.query(query);
        if (result.rowCount === 0)
            return "Nothing";
        return result.rows[0];
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    getAllSections: getAllSections,
    getSection: getSection,
};