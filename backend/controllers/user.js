const { validateEmail, validateLength } = require("../helpers/validation");
const User = require("../models/User");
const bcrypt = require("bcrypt");

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

        // validate email format
        if (!validateEmail(email)) {
            return res.status(400).json({
                message: "invalid email address",
            });
        }

        // make sure this user doesn't already exist
        const check = await User.findOne({$or:[{email},{username}]});
        if (check) {
            return res.status(400).json({
                message: "This user already exists."
            })
        }

        if (!validateLength(first_name, 1, 30)) {
            return res.status(400).json({
                message: "invalid first name length",
            });
        }

        if (!validateLength(last_name, 1, 30)) {
            return res.status(400).json({
                message: "invalid last name length",
            });
        }

        if (!validateLength(password, 8, 30)) {
            return res.status(400).json({
                message: "invalid password length",
            });
        }

        // encrypt password
        const cryptedPassword = await bcrypt.hash(password, 12);

        const user = await new User({
            first_name,
            last_name,
            email,
            username,
            password: cryptedPassword,
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