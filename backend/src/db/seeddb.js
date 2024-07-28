const pool = require("./dbconfig");

const seedDB = async () => {
    let query = `INSERT INTO "Restaurant" (name, id) VALUES ('Golden India', 1);`
    query += `INSERT INTO "Section" (name, restaurant_id, id) VALUES ('Italian', 1, 1);`
    query += `INSERT INTO "Section" (name, restaurant_id, id) VALUES ('Indian', 1, 2);`
    query += `INSERT INTO "Product" (id, name, image, section_id, price, ingredients) VALUES (1, 'Pepperoni Pizza', 'image', 1, 9.99, 'pepperoni, mozzarella, tomato sauce, oregano');`
    query += `INSERT INTO "Product" (id, name, image, section_id, price, ingredients) VALUES (2, 'Margherita Pizza', 'image', 1, 8.99, 'mozzarella, tomato, olive oil');`
    query += `INSERT INTO "Product" (id, name, image, section_id, price, ingredients) VALUES (3, 'Curry Chicken', 'image', 2, 13.99, 'chicken, beef, curry sauce');`
    query += `INSERT INTO "User" (id, name, email, password, role) VALUES (1, 'Test', 'test@test.test', 'testtesttest', 1);`;
    try {
        await pool.query(query);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    seed: seedDB
};