const { validateEmail } = require("../helpers/validation");
const User = require("../models/User");

exports.register = async (req, res) => {
    try {
        const {
            first_name,
            last_name,
            email,
            username,
            password,
            birthYear,
            birthMonth,
            birthDay,
            gender,
        } = req.body;

        if (!validateEmail(email)) {
            return res.status(400).json({
                message: "invalid email address",
            });
        }

        return;
        const user = await new User({
            first_name,
            last_name,
            email,
            username,
            password,
            birthYear,
            birthMonth,
            birthDay,
            gender,
        }).save();
        res.json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    };
};