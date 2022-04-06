const express = require("express");
const router = express.Router();

const Post = require("../models/Post");

router.post("/", async (req, res) => {
    const { title, description, url, status } = req.body;

    // Validation trước:
    if (!title)
        return res
            .status(400)
            .json({ seccess: false, message: "Title is required" });

    try {
        // Cái url nếu bắt đầu bằng cái http thì sẽ lấy luôn, nếu ko có thì sẽ thêm vào
        const newPost = new Post({
            title,
            description,
            url: url.startsWith("https://")
                ? url
                : url.startsWith(`https://${url}`),
            status: status || "TO LEARN",
            user: "62457e77e45f6c4dcc9494f2",
        });

        // Xong thì lưu lại:
        await newPost.save();

        res.json({ success: true, message: "Happy learning", post: newPost });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
});
