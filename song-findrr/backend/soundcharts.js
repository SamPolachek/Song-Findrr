import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const BASE_URL = "https://customer.api.soundcharts.com/";

const soundcharts = axios.create({
    baseURL: BASE_URL,
    headers: {
        "x-app-id": process.env.SOUNDCHARTS_APP_ID,
        "x-api-key": process.env.SOUNDCHARTS_APP_TOKEN,
    },
});

export default soundcharts;

console.log(process.env.SOUNDCHARTS_APP_ID, process.env.SOUNDCHARTS_APP_TOKEN);