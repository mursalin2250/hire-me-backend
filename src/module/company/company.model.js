import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        trim: true,
        required: true,
    },
    job: [{
        type: mongoose.Types.ObjectId,
        ref: "Job"
    }],
});

const company = mongoose.model("Company", companySchema);

export default company;