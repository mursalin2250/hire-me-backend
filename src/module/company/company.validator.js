import joi from "joi";

export const createCompanyValidatorSchema = joi.object({
    name: joi.string().min(5).max(40).required()
});

export const getCompanyValidatorSchema = joi.object({
    id: joi.string().required()
});

export const updateCompanyValidatorSchema = joi.object({
    name: joi.string().min(5).max(40)
});

export const deleteCompanyValidatorSchema = joi.object({
    id: joi.string()
});
