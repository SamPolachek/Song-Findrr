import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

const router = express.Router();

function auth(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Missing Token." });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;
        next();
    } catch (e) {
        res.status(401).json({ error: "Invalid Token." });
    }
}

router.post("/add", auth, async (req,res) => {
    const { songName, uuid } = req.body;

    const user = await User.findById(req.userId);
    user.history.push({ songName, uuid });
    await user.save();

    res.json({ message: "Search Saved." });
});

router.get("/get", auth, async (req, res) => {
    const user = await User.findById(req.userId);
    res.json(user.history);
});

export default router;