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
        throw new UserError("UserDatabaseError", error.details ? error.details : "Unexpected database error");
    }
};

const getUser = async (user) => {
    const query = `SELECT name, email, role, password FROM "User" WHERE email='${user.email}';`;
    try {
        let result = await pool.query(query);
        if (result.rowCount === 0)
            throw new UserError("UserError", "User does not exist");
        else if (await compare(user.password, result.rows[0].password))
            return result.rows[0];
        else
            throw new UserError("UserError", "Wrong Password");
    } catch (error) {
        throw new UserError("UserDatabaseError", error.details ? error.details : "Unexpected database error");
    }
}

module.exports = {
    createUser: createUser,
    getUser: getUser
};