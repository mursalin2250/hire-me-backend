import express from "express";
import connectDB from "./src/config/db.js";
import {PORT} from "./src/config/envConfig.js";
import appRoute from "./app.js";

const app = express();

app.use(express.json());
connectDB();

app.get("/", (req, res) => {
    res.send("HireMe - Job Posting Platform!");
})

app.use("/api", appRoute);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
});
