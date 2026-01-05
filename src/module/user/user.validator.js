import joi from "joi";

export const createUserValidator = () => {
    joi.object({
        name: joi.string().min(5).max(40).required(),
        username: joi.string().alphanum().min(3).required(),
        email: joi.string().email().required(),
        password: joi.string().min(6).max(8).required(),
        role: joi.forbidden(),
        status: joi.forbidden(),
        refreshToken: joi.forbidden() 
    });
}