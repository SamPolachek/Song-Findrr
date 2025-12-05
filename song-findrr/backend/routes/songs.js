import express from "express";
import { getSongByUUID } from "../../backend/services/songfindrr.js";
import { searchSongsByName } from "../../backend/services/searchSongs.js";

const router = express.Router();

router.get("/search/:name", async (req, res) => {
    try {
        const name = req.params.name;
        const results = await searchSongsByName(name);
        const song = results?.[0];

        if (!song) {
            return res.status(404).json({ error: "No Matching Songs Found." });
        }

        const metadata = await getSongByUUID(song.uuid);
        res.json(metadata);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;