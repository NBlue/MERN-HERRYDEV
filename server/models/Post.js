const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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

var db = mongoose.createConnection("mongodb://localhost:27017/mern-henry");
module.exports = db.model("posts", PostSchema);
