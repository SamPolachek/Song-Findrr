import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import searchRouter from "./routes/search.js";
import detailsRouter from "./routes/songDetails.js";
import authRouter from "./routes/auth.js";
import historyRouter from "./routes/history.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const MONGO = process.env.MONGO_URI;
if (!MONGO) {
    console.error("MONGO_URI is Not Set in .env.");
    process.exit(1);
}

mongoose.set("strictQuery", false);
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB."))
    .catch((error) => {
        console.error("MongoDB Connection Error:", error);
        process.exit(1);
    });

app.use("/api/search", searchRouter);
app.use("/api/search/details", detailsRouter);

app.use("/api/auth", authRouter);
app.use("/api/history", historyRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Backend Running on Port ${PORT}`);
});