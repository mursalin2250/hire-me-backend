import joi from "joi";

export const createApplicationValidatorSchema = joi.object({
    jobId: joi.string().required(),
    jobSeekerId: joi.string().required(),
    cvPath: joi.string(),
    applicationStatus: joi.forbidden(),
});

export const getApplicationValidatorSchema = joi.object({
    companyId: joi.string().required(),
    cvPath: joi.string().required()
});

export const updateApplicationValidatorSchema = joi.object({
    id: joi.string().required(),
    applicationStatus: joi.string().required()
});

export const deleteApplicationValidatorSchema = joi.object({
    id: joi.string()
});
