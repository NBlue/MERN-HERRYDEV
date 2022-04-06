const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth"); // middleware bảo vệ xác thực đúng access token của user

const Post = require("../models/Post");
const User = require("../models/User");

// @route GET api/posts
// @desc Get post
// @access Private  // Người dùng phải login thì mới lấy được dữ liệu
router.get("/", verifyToken, async (req, res) => {
    try {
        //const posts = await Post.find({ user: req.userId }); // Tìm kiếm bài đăng theo id người dùng
        // populate để liên kết 2 bảng và lấy ra dữ liệu liên quan // giống quan hệ
        const posts = await Post.find({ user: req.userId }).populate(
            "user",
            "username", // Các trường bảng user cần lấy ra
            User
        );
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

// @route PUT api/posts
// @desc Update post
// @access Private  // Người dùng phải login thì mới update được
router.put("/:id", verifyToken, async (req, res) => {
    const { title, description, url, status } = req.body;

    // Simple validation
    if (!title)
        return res
            .status(400)
            .json({ success: false, message: "Title is required" });

    try {
        // Data cần update
        let updatePost = {
            title,
            description: description || "",
            url: (url.startsWith("https://") ? url : `https://${url}`) || "",
            status: status || "TO LEARN",
        };

        //                              id của bài post, user của người dùng muốn update
        const postUpdateCondition = { _id: req.params.id, user: req.userId };

        //Update: findByIdAndUpdate(dk để update, data update, sau khi update xong sẽ chả lại cái mới cho updatePost)
        updatePost = await Post.findByIdAndUpdate(
            postUpdateCondition,
            updatePost,
            { new: true }
        );

        // User not authorised to update post:
        if (!updatePost)
            return res.status(401).json({
                success: false,
                message: "Post not found or user not authorised",
            });

        // All good:
        res.json({ success: true, message: "Excellent progress!" });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
});

// @route DELETE api/posts
// @desc Delete post
// @access Private  // Người dùng phải login thì mới update được
router.delete("/:id", verifyToken, async (req, res) => {
    // conditon: điều kiện
    try {
        const postDeleteCondition = { _id: req.params.id, user: req.userId };
        const deletePost = await Post.findByIdAndDelete(postDeleteCondition);

        // User not authorised to delete post:
        if (!deletePost)
            return res.status(401).json({
                success: false,
                message: "Post not found or user not authorised",
            });

        // All good:
        res.json({
            success: true,
            message: "Delete successfull!",
            deletedPost: deletePost,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
});

module.exports = router;
