import joi from "joi";

export const createUserValidatorSchema = joi.object({
    name: joi.string().min(5).max(40).required(),
    username: joi.string().alphanum().min(3).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
    role: joi.forbidden(),
    status: joi.forbidden(),
    refreshToken: joi.forbidden(),
    jobApplications: joi.forbidden()
});

export const loginUserValidatorSchema = joi.object({
    username: joi.string().alphanum().min(3),
    email: joi.string().email(),
    password: joi.string().required(),
}).xor("username", "email");

export const updateUserValidatorSchema = joi.object({
    username: joi.string().alphanum().min(3),
    email: joi.string().email(),
    password: joi.forbidden()
});

export const deleteUserValidatorSchema = joi.object({
    password: joi.string().required()
});

export const accessTokenValidatorSchema = joi.object({
    refreshToken : joi.string().required()
});

export const changePasswordValidatorSchema = joi.object({
    currentPassword: joi.string().required(),
    password: joi.string().required(),
    confirmPassword: joi.string().required()
});

export const getUserValidatorSchema = joi.object({
    username: joi.string().alphanum(),
    email: joi.string().email(),
}).xor("username", "email");
