import mongoose from "mongoose"

const applicationSchema = new mongoose.Schema({
    jobId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    jobSeekerId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    cvPath: {
        type: String,
        required: true
    },
    applicationStatus: {
        type: String,
        enum: ["pending", "accepted", "rejected"],
        default: "pending",
        required: true
    },
},{timestamps: true});

const application = mongoose.model("Application", applicationSchema);

export default application;