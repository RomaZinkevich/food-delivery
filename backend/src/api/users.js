const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const UserError = require('../utils/UserError');
const { checkToken, adminToken } = require("../middleware/auth");
const { tryCatch } = require("../utils/tryCatch");
const { createUser } = require("../db/userdb");

const schema = Joi.object({
    name: Joi.string().required(),
    password: Joi.string().min(8)
    .pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)/)
    .required(),
    email: Joi.string().required()
});

// @desc Logs user in
// @route POST /api/users
// @access Public
router.post("/",
    tryCatch(async (req, res, next) => {
        let newUser = {
            name: req.body.name,
            password: req.body.password,
            email: req.body.email
        };
        const { error, value } = schema.validate(newUser);
        if (error) throw new UserError("UserSchemaError", error.details[0].message);

        const response = await createUser(newUser);
        let result = response[0];
        let token = jwt.sign(result, process.env.JWT_SECRET_KEY, {
            expiresIn: "10m",
        });
        return res.json({"status":"success", "token":token, "details": result});
}));

module.exports = router;