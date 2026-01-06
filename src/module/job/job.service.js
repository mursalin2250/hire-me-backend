import jobModel from "./job.model.js";
import companyModel from "../company/company.model.js";

export const createJobService = async (data) => {

    const job = await jobModel.findOne({title: data.title, companyid: data.companyid});
    if(job){
        throw new Error("Job already Exists!");
    }
    
    const newJob = await jobModel.create(data);
    await companyModel.findByIdAndUpdate(newJob.companyId, {$push: {job: newJob._id}});
    return newJob;
}

export const getJobService = async (filter) => {
    const job = await jobModel.findOne({_id: filter.id}).select("-__v").populate("companyId", "name").populate("postedBy", "name role").populate("application");
    if(!job) {
        throw new Error("No job posting found!");
    }
    return job;
}

export const getAllJobService = async () => {
    const job = await jobModel.find().select("-__v");
    if (!job) {
        throw new Error("Add jobs to view them");
    }
    return job;
}

export const updateJobService = async (filter, data) => {
    const job = await jobModel.findOneAndUpdate({_id: filter.id}, data, {new: true});
    if(!job) {
        throw new Error("No job posting found!");
    }
    return job;
}

export const deleteJobService = async (filter) => {
    const job = await jobModel.findOneAndDelete({_id: filter.id});

    if(!job){
        throw new Error("No job posting found!");
    }

    return job;
}