import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
    },
    description: {
        type: String,
        trim: true,
    },
    companyId: {
        type: mongoose.Types.ObjectId,
        ref: "Company"
    },
    application: [{
        type: mongoose.Types.ObjectId,
        ref: "Application"
    }],
    postedBy:{
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum:["open", "closed"],
        required: true
    }
});

const job = mongoose.model("Job", jobSchema);

export default job;
