import soundcharts from "../soundcharts.js";

export async function getSongByUUID(uuid) {
    try {
        const response = await soundcharts.get(`/api/v2.25/song/${uuid}`);
        return response.data;
    } catch (error) {
        console.error("Soundcharts API Error:", error.response?.data || error);
        throw new Error("Error. Could Not Find Song.");
    }
}