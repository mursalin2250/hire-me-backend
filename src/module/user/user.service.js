import userModel from "./user.model.js";
import { accessTokenGenerator } from "../../utils/jwt.js";
import { hashPassword } from "../../utils/password.js";

export const createUserService = async (data) => {
    const {name, username, email, password} = data;
    const user = await userModel.findOne({$or: [{username: username}, {email: email}]});
    if(user){
        throw new Error("User already exists!");
    }

    const hashedPassword = await hashPassword(password);
    const newUser = userModel.create({name, username, email, password: hashedPassword});
    
    return newUser;
}