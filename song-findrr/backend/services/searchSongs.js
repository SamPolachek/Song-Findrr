import soundcharts from "../soundcharts.js";

export async function searchSongsByName(name) {
    try {
        const response = await soundcharts.get("/api/v2.25/search", {
            params: {
                q: name,
                type: "song"
            }
        });

        console.log("Soundcharts API Search Results:", response.data.results);

        return response.data;
    } catch (error) {
        console.error("Soundcharts Search Error:", error.response?.data || error);
        throw new Error("Failed to Search for Songs.");
    }
}