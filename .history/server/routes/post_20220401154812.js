const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth"); // middleware bảo vệ xác thực đúng access token của user

const Post = require("../models/Post");

// @route GET api/posts
// @desc Get post
// @access Private  // Người dùng phải login thì mới lấy được dữ liệu
router.get("/", verifyToken, async (req, res) => {
    try {
        const posts = await Post.find({ user: req.userId }).populate("user", [
            "username",
        ]); // Tìm kiếm bài đăng theo id người dùng
        res.json({ success: true, posts });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
});

// @route POST api/posts
// @desc Create post
// @access Private  // Người dùng phải login thì mới tạo được mới
router.post("/", verifyToken, async (req, res) => {
    const { title, description, url, status } = req.body;

    // Simple validation
    if (!title)
        return res
            .status(400)
            .json({ success: false, message: "Title is required" });

    try {
        const newPost = new Post({
            title,
            description,
            url: url.startsWith("https://") ? url : `https://${url}`,
            status: status || "TO LEARN",
            user: req.userId,
        });

        await newPost.save(); // Lưu lại database

        res.json({ success: true, message: "Happy learning!", post: newPost });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
});

module.exports = router;
