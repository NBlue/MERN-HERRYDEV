const express = require("express");
const router = express.Router();

const Post = require("../models/Post");

// @route POST api/posts
// @desc Create post
// @access Private  // Người dùng phải login thì mới tạo được mới
router.post("/", async (req, res) => {
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
            user: "6245c01080b1c98718ce2b5a",
        });

        await newPost.save();

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
