const pool = require("./dbconfig");

//@desc Gets all Restaurants
const getAllRestaurants = async () => {
    const query = `SELECT * FROM "Restaurant";`;
    try {
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

const clearRestaurants = async () => {
    const query = `DELETE FROM "Restaurant";`
    try {
        await pool.query(query);
    } catch (error) {
        console.log(error.message);
    }
}

const seedRestaurantDB = async () => {
    let query = `INSERT INTO "Restaurant" (name) VALUES ('Golden India');`
    try {
        await pool.query(query);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllRestaurants: getAllRestaurants,
    clearRestaurants: clearRestaurants,
    seedRestaurantDB: seedRestaurantDB
};