const express = require("express");
const router = express.Router();
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const verifyToken = require("../middleware/auth");
require("dotenv").config();

// @route GET api/auth
// @desc Kiểm tra người dùng đã login chưa
// @access Public
router.get("/", verifyToken, async (req, res) => {
    try {
        // Tìm xem trong database có cái use như thế ko?
        console.log(req.userId);
        const user = await User.findById(req.userId).select("username"); //select: lấy thuộc tính username trong bảng User
        if (!user)
            return res
                .status(400)
                .json({ success: false, message: "User not found!" });
        res.json({ success: true, user });
    } catch (error) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
});

// @route POST api/auth/register
// @desc Register user
// @access Public   ai cung co the login
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
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
});

// @route POST api/auth/login
// @desc Register user
// @access Public   ai cung co the login
router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    // Simple validationError
    if (!username || !password)
        return res.status(400).json({
            success: false,
            message: "Missing username and/or password",
        });

    // Bắt đầu nói chuyện vơi database thì sử dụng try catch
    try {
        //Check for existing user
        const user = await User.findOne({ username }); // Tìm username trong database
        if (!user)
            return res
                .status(400)
                .json({ success: false, message: "Incorect username" });

        // Khi username đã đúng, lại check đến password
        const passwordValid = await await argon2.verify(
            user.password,
            password
        );
        if (!passwordValid)
            return res
                .status(400)
                .json({ success: false, message: "Incorect password" });

        // All good
        const accessToken = jwt.sign(
            { userId: user._id },
            process.env.ACCESS_TOKEN_SECRET
        );

        res.json({
            success: true,
            message: "User Logged in successful",
            accessToken,
        });
    } catch {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
});

module.exports = router;
