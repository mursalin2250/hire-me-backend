import applicationModel from "./application.model.js";
import userModel from "../user/user.model.js";
import jobModel from "../job/job.model.js";

export const createApplicationService = async (cv, data) => {
    const application = await applicationModel.findOne({jobId: data.jobId, jobSeekerId: data.jobSeekerId});
    if(application) {
        throw new Error("You have already applied for this job!");
    }

    const newApplication = await applicationModel.create({jobId: data.jobId, jobSeekerId: data.jobSeekerId, cvPath: cv.path});

    await jobModel.findByIdAndUpdate(newApplication.jobId, {$push: {application: newApplication._id}});
    await userModel.findByIdAndUpdate(newApplication.jobSeekerId, {$push: {application: newApplication._id}});
    return newApplication;
}

export const getApplicationService = async (id) => {
    const application = await applicationModel.findOne({id}).select("-__v").populate("jobId").populate("jobSeekerId");
    if(!application) {
        throw new Error("No application found!");
    };

    return application;
}

export const getAllApplicationService = async () => {
    const application = await applicationModel.find().select("-__v");
    if(!application) {
        throw new Error("Add companies to view them.");
    }
    return application;
}

export const updateApplicationService = async (id, data) => {
    const application = await applicationModel.findOneAndUpdate({_id: id}, data, {new: true});
    if(!application) {
        throw new Error("No application found!")
    };

    return application;
}

export const deleteApplicationService = async (id) => {
    const application = await jobModel.findOneAndDelete({_id: id});
    if(!application){
        throw new Error("No application found!");
    }

    return application;
}