const pool = require("./dbconfig");

const seedDB = async () => {
    let query = `INSERT INTO "Restaurant" (name, id) VALUES ('Golden India', 1);`
    query += `INSERT INTO "Section" (name, restaurant_id, id) VALUES ('Italian', 1, 1);`
    query += `INSERT INTO "Section" (name, restaurant_id, id) VALUES ('Indian', 1, 2);`
    try {
        await pool.query(query);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    seed: seedDB
};