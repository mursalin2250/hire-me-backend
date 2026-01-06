import generateResponse from "../../utils/generateResponse.js";
import {createJobService, deleteJobService, getAllJobService, getJobService, updateJobService} from "./job.service.js";

export const createJob = async (req,res) => {
    try {
        const job = await createJobService(req.body);
        res.status(201).json(generateResponse(true, 201, "Job created Successfully", job))
    } catch (error) {
        console.log(error);
        res.status(500).json(generateResponse(false, 500, error.message, null));
    }
}

export const getJob = async (req,res) => {
    try {
        const job = await getJobService(req.query);
        res.status(201).json(generateResponse(true, 201, "Job fetched Successfully", job))
    } catch (error) {
        console.log(error);
        res.status(500).json(generateResponse(false, 500, error.message, null));
    }
}

export const getAllJob = async (req,res) => {
    try {
        const job = await getAllJobService(req.body);
        res.status(201).json(generateResponse(true, 201, "Jobs fetched Successfully", job))
    } catch (error) {
        console.log(error);
        res.status(500).json(generateResponse(false, 500, error.message, null));
    }
}

export const updateJob = async (req,res) => {
    try {
        const job = await updateJobService(req.query, req.body);
        res.status(201).json(generateResponse(true, 201, "Job updated Successfully", job))
    } catch (error) {
        console.log(error);
        res.status(500).json(generateResponse(false, 500, error.message, null));
    }
}

export const deleteJob = async (req,res) => {
    try {
        const job = await deleteJobService(req.query);
        res.status(201).json(generateResponse(true, 201, "Job delete Successfully", job))
    } catch (error) {
        console.log(error);
        res.status(500).json(generateResponse(false, 500, error.message, null));
    }
}
