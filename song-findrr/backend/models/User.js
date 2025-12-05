import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    history: [
        {
            songName: String,
            uuid: String,
            searchDate: { type: Date, default: Date.now }
        }
    ]
});

export default mongoose.model("User", UserSchema);