import mongoose from "mongoose";
import { MONGO_URI } from "./envConfig.js";

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Database Connection Successful!");
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;
