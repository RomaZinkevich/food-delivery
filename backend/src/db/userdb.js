const pool = require("./dbconfig");
const UserError = require('../utils/UserError');
const { encrypt, compare } = require("../utils/passwordEncryption");

//@desc Creates new User
const createUser = async (user) => {
    user.password = await encrypt(user.password);
    const query = `INSERT INTO "User" (name, email, password, role) VALUES ('${user.name}', '${user.email}', '${user.password}', 0) RETURNING name, email, role;`;
    try {
        let result = await pool.query(query);
        return result.rows;
    } catch (error) {
        if (error.message === "duplicate key value violates unique constraint \"unique_email\"")
            throw new UserError("EmailValidationError", "Email already exists");
        throw new UserError("UserDatabaseError", error.detail ? error.detail : "Unexpected database error");
    }
};

module.exports = {
    createUser: createUser
};