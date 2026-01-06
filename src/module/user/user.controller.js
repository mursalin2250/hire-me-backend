import { accessTokenService, changePasswordService, createUserService, deleteUserService, getAllUsersService, getUserService, loginUserService, updateUserService } from "./user.service.js";
import generateResponse from "../../utils/generateResponse.js";

export const createUser = async (req,res) => {
    try {
        const user = await createUserService(req.body);
        res.status(201).json(generateResponse(true, 201, "user created successfully", user));
    } catch (error) {
        console.log(error);
        res.status(500).json(generateResponse(false, 500, error.message, null));
    }
}

export const loginUser = async (req,res) => {
    try {
        const user = await loginUserService(req.body);
        res.status(201).json(generateResponse(true, 201, "user logged in successfully", user));
    } catch (error) {
        console.log(error);
        res.status(500).json(generateResponse(false, 500, error.message, null));
    }
}

export const getAccessToken = async (req, res) => {
    try {
        const newAccessToken = await accessTokenService(req.body.refreshToken);
        res.status(200).json(generateResponse(true, 200, "Token generated successfully", {token: newAccessToken}));
    } catch (error) {
        console.log(error);
        res.status(500).json(generateResponse(false, 500, error.message, null));
    }
}

export const getUser = async (req,res) => {
    try {
        const user = await getUserService(req.body);
        res.status(200).json(generateResponse(true, 200, "User fetched successfully!", user));
    } catch (error) {
        console.log(error)
        res.status(500).json(generateResponse(false, 500, error.message, null));
    }
}

export const getAllUsers = async (req,res) => {
    try {
        
        const users = await getAllUsersService();
        res.status(200).json(generateResponse(true, 200, "All user fetched", users));
    } catch (error) {
        console.log(error)
        res.status(500).json(generateResponse(false, 500, error.message, null));
    }
}

export const updateUser = async (req,res) => {
    try {
        const updatedUser = await updateUserService(req.query, req.body);
        res.status(201).json(generateResponse(true, 200, "User updated successfully!", updatedUser));
    } catch (error) {
        console.log(error);
        res.status(500).json(generateResponse(false, 500, error.message, null));
    }
}

export const changePassword = async (req,res) => {
    try {
        await changePasswordService(req.user.id, req.body);
        res.status(200).json(generateResponse(true, 200, "Password changed successfully!", changePassword));
    } catch (error) {
        console.log(error);
        res.status(500).json(generateResponse(false, 500, error.message, null));
    }
}

export const deleteUser = async (req,res) => {
    try {
        const deletedUser = await deleteUserService(req.query, req.body);
        res.status(200).json(generateResponse(true, 200, "User deleted successfully!", deletedUser));
    } catch (error) {
        console.log(error);
        res.status(500).json(generateResponse(false, 500, error.message, null));
    }
}