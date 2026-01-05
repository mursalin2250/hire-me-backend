import joi from "joi";

export const createJobValidatorSchema = joi.object({
    title: joi.string().min(5).max(40).required(),
    description: joi.string().min(5).required(),
    companyId: joi.string().required(),
    postedBy: joi.string().required(),
    salary: joi.number().required(),
    status: joi.string().required()
});

export const getJobValidatorSchema = joi.object({
    title: joi.string().required(),
    companyId: joi.string().required()
});

export const updateJobValidatorSchema = joi.object({
    title: joi.string().min(5).max(40),
    description: joi.string().min(5),
    companyId: joi.string(),
    postedBy: joi.string(),
    salary: joi.number(),
    status: joi.string()
});

export const deleteJobValidatorSchema = joi.object({
    id: joi.string()
});

