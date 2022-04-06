// Quản lí người dùng - Tạo table trong database

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true, // Ko ai có user name giống nhau:
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        //Ngày tạo tài khoản
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("user", UserSchema);
