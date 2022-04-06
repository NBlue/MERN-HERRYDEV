// Quản lí người dùng - Tạo table trong database - Gần giống thế thôi
// Thực tế: dùng cái models này mới chọc được vào database

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true, // Ko ai có username giống nhau:
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

var db = mongoose.createConnection("mongodb://localhost:27017/mern-henry");
module.exports = db.model("User", UserSchema);
