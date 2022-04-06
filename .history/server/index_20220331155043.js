require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const authRouter = require("./routes/auth");

const connectDB = async () => {
    try {
        mongoose.connect(
            "mongodb+srv://clusterAnything.mongodb.net/test?retryWrites=true&w=majority",
            {
                user: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log("MongoDB connected");
    } catch (err) {
        console.log("Err:" + err.message);
        process.exit(1);
    }
};
connectDB();

const app = express();

app.use("/api/auth", authRouter);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
