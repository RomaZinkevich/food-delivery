const pool = require("./dbconfig");

//@desc Gets all Restaraunts
const getAllRestaraunts = async () => {
    const query = `SELECT * FROM "Restaraunt";`;
    try {
        let result = await pool.query(query);
        if (result.rowCount === 0)
            return "Nothing";
            //throw new ContentError("ContentDatabaseError", "Content ID Not Found");
        return result.rows[0];
    } catch (error) {
        return error.message;
        //throw new ContentError("ContentDatabaseError", error.details ? error.details : "Unexpected database error");
    }
};

module.exports = {
    getAllRestaraunts: getAllRestaraunts
};