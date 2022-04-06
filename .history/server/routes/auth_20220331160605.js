const express = require("express");
const router = express.Router();
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
require("dotenv").config();

router.get("/", (req, res) => res.send("USER ROUTER"));

router.post("/register", async (req, res) => {
    const { username, password } = req.body;

    // Simple validation
    if (!username || !password)
        return res
            .status(400)
            .json({ success: false, message: "Missing username or password" });

    try {
        // Check for existing user
        const user = await User.findOne({ username });

        if (user)
            return res
                .status(400)
                .json({ success: false, message: "Username already taken" });

        // All good -> hash lại password trước khi mã hóa
        const hasdedPassword = await argon2.hash(password);
        const newUser = new User({ username, password: hasdedPassword });
        await newUser.save();

        // Return token để lấy dữ liệu của cái người đang sử dụng
        const accessToken = jwt.sign(
            { userId: newUser._id },
            process.env.ACCESS_TOKEN_SECRET
        );

        res.json({
            success: true,
            message: "Username successful",
            accessToken,
        });
    } catch (err) {}
});

module.exports = router;
