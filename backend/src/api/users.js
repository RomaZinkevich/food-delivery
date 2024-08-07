const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const UserError = require('../utils/UserError');
const { checkToken, adminToken } = require("../middleware/auth");
const { tryCatch } = require("../utils/tryCatch");
const { createUser, getUser } = require("../db/userdb");

const signupSchema = Joi.object({
    name: Joi.string().required(),
    password: Joi.string().min(8)
    .pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)/)
    .required(),
    email: Joi.string().required()
});

const loginSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
});

// @desc Logs user in
// @route POST /api/users
// @access Public
router.post("/signup",
    tryCatch(async (req, res, next) => {
        let newUser = {
            name: req.body.name,
            password: req.body.password,
            email: req.body.email
        };
        const { error, value } = signupSchema.validate(newUser);
        if (error) throw new UserError("UserSchemaError", error.details[0].message);

        const response = await createUser(newUser);
        let result = response[0];
        let token = jwt.sign(result, process.env.JWT_SECRET_KEY, {
            expiresIn: "10m",
        });
        return res.json({"status":"success", "token":token, "details": result});
}));

router.post("/login",
    tryCatch(async (req, res, next) => {
        let user = {
            password: req.body.password,
            email: req.body.email,
        };
        const { error, value } = loginSchema.validate(user);
        if (error) throw new UserError("UserSchemaError", error.details[0].message);

        let result = await getUser(user);
        delete result.password;
        let token = jwt.sign(result, process.env.JWT_SECRET_KEY, {
            expiresIn: "10m",
        });
        return res.json({"status":"success", "token": token, "details": result});
}));

module.exports = router;