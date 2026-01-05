import { createUserService } from "./user.service.js";
import response from "../../utils/generateResponse.js";

export const createUser = async (req,res) => {
    try {
        const user = await createUserService(req.body);
        res.status(201).send(response(true, 201, "user created successfully", user));
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message});
    }
}