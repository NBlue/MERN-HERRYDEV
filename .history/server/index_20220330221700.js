const express = require("express");
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        mongoose.connect(
            "mongodb+srv://clusterAnything.mongodb.net/test?retryWrites=true&w=majority",
            {
                user: process.env.MONGO_USER,
                pass: process.env.MONGO_PASSWORD,
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
