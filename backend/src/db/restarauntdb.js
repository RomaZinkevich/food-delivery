const pool = require("./dbconfig");

//@desc Gets all Restaraunts
const getAllRestaraunts = async () => {
    const query = `SELECT * FROM "Restaraunt";`;
    try {
        let answer = await pool.query("SELECT current_database();");
        console.log(answer)
        let result = await pool.query(query);
        if (result.rowCount === 0)
            return "Nothing";
            //throw new ContentError("ContentDatabaseError", "Content ID Not Found");
        return result.rows;
    } catch (error) {
        console.log(error.message);
        //throw new ContentError("ContentDatabaseError", error.details ? error.details : "Unexpected database error");
    }
};

module.exports = {
    getAllRestaraunts: getAllRestaraunts
};