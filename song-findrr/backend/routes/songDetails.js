import express from "express";
import soundcharts from "../soundcharts.js";

const router = express.Router();

router.get("/:uuid", async (req, res) => {
    const { uuid } = req.params;

    try {
        const metadataPoint = `/api/v2.25/song/${uuid}`;
        const response = await soundcharts.get(metadataPoint);

        res.json(response.data);
    } catch (error) {
        console.error("Metadata Error:", error.response?.data || error);
        res.status(500).json({ error: "Failed to Find Song Metadata." });
    }
});

export default router;