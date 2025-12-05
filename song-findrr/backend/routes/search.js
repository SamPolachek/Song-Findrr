import express from "express";
import soundcharts from "../soundcharts.js";

const router = express.Router();

router.get("/song/:name", async (req, res) => {
    const name = req.params.name;

    try {
        const endpoint = `/api/v2/song/search/${encodeURIComponent(name)}`;
        const response = await soundcharts.get(endpoint);

        const items = response.data.items || [];
        if (items.length === 0) {
            return res.json({ items: [] });
        }

        res.json({ items });
    } catch (error) {
        console.error("Search Error:", error.response?.data || error);
        res.status(500).json({ error: "Failed to Search for Songs." });
    }
});

export default router;