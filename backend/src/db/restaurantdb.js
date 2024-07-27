const pool = require("./dbconfig");
const RestaurantError = require('../utils/RestaurantError');

//@desc Gets all Restaurants
const getAllRestaurants = async () => {
    const query = `SELECT * FROM "Restaurant";`;
    try {
        let result = await pool.query(query);
        return result.rows;
    } catch (error) {
        throw new RestaurantError("RestaurantDatabaseError", "Unexpected database error");
    }
};

module.exports = {
    getAllRestaurants: getAllRestaurants
};