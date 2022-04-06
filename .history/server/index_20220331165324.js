const express = require("express");
const mongoose = require("mongoose");

const authRouter = require("./routes/auth");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/mern-henry");
        console.log("MongoDB connected");
    } catch (err) {
        console.log("Err:" + err.message);
        process.exit(1);
    }
};
connectDB();

const app = express();
app.use(express.json());

app.use("/api/auth", authRouter);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
