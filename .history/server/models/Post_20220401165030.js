const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var db1 = mongoose.createConnection("mongodb://localhost:27017/mern-henry");

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
