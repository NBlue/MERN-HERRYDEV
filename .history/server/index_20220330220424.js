const express = require("express");
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://nblue151:Nam01052001@mern-learnit.r3g5f.mongodb.net/mern-learnit?retryWrites=true&w=majority",
            {
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

app.get("/", (req, res) => res.send("Hello world"));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
