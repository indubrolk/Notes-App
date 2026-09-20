require("dotenv").config();
const config = require("./config.json");
const mongoose = require("mongoose");

const express = require("express");
const cors = require("cors");
const app = express();

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch((err) => console.error("MongoDB connection error:", err));

app.use(express.json());

app.use(
    cors({
        origin: "*",
    })
);

app.get("/", (req, res) => {
    res.json({ data: "hello" });
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});

module.exports = app;