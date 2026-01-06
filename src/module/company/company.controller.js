import generateResponse from "../../utils/generateResponse.js";
import {createCompanyService, deleteCompanyService, getAllCompanyService, getCompanyService, updateCompanyService} from "./company.service.js";

export const createCompany = async (req,res) => {
    try {
        const company = await createCompanyService(req.body);
        res.status(201).json(generateResponse(true, 201, "Company created Successfully", company))
    } catch (error) {
        console.log(error);
        res.status(500).json(generateResponse(false, 500, error.message, null));
    }
}

export const getCompany = async (req,res) => {
    try {
        const company = await getCompanyService(req.query);
        res.status(200).json(generateResponse(true, 201, "Company fetched Successfully", company))
    } catch (error) {
        console.log(error);
        res.status(500).json(generateResponse(false, 500, error.message, null));
    }
}

export const getAllCompany = async (req,res) => {
    try {
        const company = await getAllCompanyService(req.body);
        res.status(201).json(generateResponse(true, 201, "Companies fetched Successfully", company));
    } catch (error) {
        console.log(error);
        res.status(500).json(generateResponse(false, 500, error.message, null));
    }
}

export const updateCompany = async (req,res) => {
    try {
        const company = await updateCompanyService(req.query, req.body);
        res.status(201).json(generateResponse(true, 201, "Company updated Successfully", company))
    } catch (error) {
        console.log(error);
        res.status(500).json(generateResponse(false, 500, error.message, null));
    }
}

export const deleteCompany = async (req,res) => {
    try {
        const company = await deleteCompanyService(req.query);
        res.status(201).json(generateResponse(true, 201, "Company delete Successfully", company))
    } catch (error) {
        console.log(error);
        res.status(500).json(generateResponse(false, 500, error.message, null));
    }
}

