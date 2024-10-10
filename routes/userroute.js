const express = require("express");
const router = express.Router();
const User = require("../models/usermodel");
router.post("/reg", async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = new User({ username, email, password });
        await user.save();
        res.status(201).send({ message: "Registration successful!" });
    } catch (error) {
        console.error("Error saving user:", error);
        res.status(500).send({ message: "Error saving user", error: error.message });
    }
});


router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (!user) {
        return res.status(400).send({ message: "Invalid username or password" });
    }
    res.status(200).send({ message: "Login successful!" });
});
module.exports = router;

