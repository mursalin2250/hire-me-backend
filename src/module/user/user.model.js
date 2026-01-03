import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    username: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ["admin", "employee", "job seeker"],
        default: "job seeker"
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "active"
    },
    refreshToken: {
        type: String
    }
});

const user = mongoose.model("User", userSchema);

export default user;