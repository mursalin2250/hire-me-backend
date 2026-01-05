import generateResponse from "../../utils/generateResponse.js";
import { createApplicationService, deleteApplicationService, getAllApplicationService, getApplicationService, updateApplicationService } from "./application.service.js";

export const createApplication = async (req,res) => {
    try {
        const application = await createApplicationService(req.file, req.body);
        res.status(201).json(generateResponse(true, 201, "Application Created Successfully!", application));
    } catch (error) {
        console.log(error);
        res.status(500).json(generateResponse(false, 500, error.message, null));    
    }
};

export const getApplication = async (req,res) => {
    try {
        const application = await getApplicationService(req.body);
        res.status(201).json(generateResponse(true, 201, "Application fetched Successfully", application));
    } catch (error) {
        console.log(error);
        res.status(500).json(generateResponse(false, 500, error.message, null));
    }
}

export const getAllApplication = async (req,res) => {
    try {
        const application = await getAllApplicationService(req.body);
        res.status(201).json(generateResponse(true, 201, "Applications fetched Successfully", application));
    } catch (error) {
        console.log(error);
        res.status(500).json(generateResponse(false, 500, error.message, null));
    }
}

export const updateApplication = async (req,res) => {
    try {
        const application = await updateApplicationService(req.body);
        res.status(201).json(generateResponse(true, 201, "Application updated Successfully", application));
    } catch (error) {
        console.log(error);
        res.status(500).json(generateResponse(false, 500, error.message, null));
    }
}

export const deleteApplication = async (req,res) => {
    try {
        const application = await deleteApplicationService(req.body);
        res.status(201).json(generateResponse(true, 201, "Application deleted Successfully", application));
    } catch (error) {
        console.log(error);
        res.status(500).json(generateResponse(false, 500, error.message, null));
    }
}
