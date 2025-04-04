const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

const PORT = 5000; // You can change this if needed

// Proxy route to bypass CORS
app.get("/proxy/watch/:episodeId", async (req, res) => {
    const { episodeId } = req.params;
    const API_URL = `https://api-consumet-org-beta.vercel.app/meta/anilist/watch/${episodeId}?provider=zoro`;

    try {
        const response = await axios.get(API_URL);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch episode data" });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Proxy server running on http://localhost:${PORT}`);
});
