const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

const User = require("../models/userModel.js");

router.post("/register", async (req, res) => {

    try {
        // get variables from req
        const { email, password, confirmPassword } = req.body;
        // if email already exists , return message
        const isUserExist = await User.findOne({ email });
        if (isUserExist) {
            return res.status(409).json({ message: "User already exists." })
        }
        // if passwords do not match , return message
        // I can check it frontend as well !!!!!!
        if (password !== confirmPassword) {
            return res.status(403).json({ message: "Passwords do not match!" });
        }
        // create salt and hash password by this salt
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        // create user
        const newUser = await User.create({
            email: email,
            password: hashedPassword
        })
        // send user and message
        return res.status(200).json({ message: "User created successfully.", user: newUser });


    } catch (error) {

        return res.status(400).json({ message: "Unexpected error!", error });
    }
})



router.post("/login", async (req, res) => {
    try {
        // get variables from req
        const { email, password } = req.body;
        // check is user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }
        // check password
        const isPasswordCorrect = await bcrypt.compareSync(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(403).json({ message: "Wrong password." })
        }
        //return message and user
        return res.status(200).json({ message: "Login successful.", user });

    } catch (error) {
        return res.status(400).json({ message: "Unexpected error", error })
    }
})
















module.exports = router;