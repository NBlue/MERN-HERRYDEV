const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//mongodb://localhost:27017/mern-henry
var db1 = mongoose.createConnection("mongodb://localhost:27017/gh3639");

const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    url: {
        type: String,
    },
    status: {
        type: String,
        enum: ["TO LEARN", "LEARNING", "LEARNED"],
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "users",
    },
});

module.exports = db1.model("posts", PostSchema);
