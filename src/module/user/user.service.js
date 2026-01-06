import userModel from "./user.model.js";
import { accessTokenGenerator, refreshTokenGenerator, verifyToken } from "../../utils/jwt.js";
import { comparePassword, hashPassword } from "../../utils/password.js";

export const createUserService = async (data) => {
    const {name, username, email, password} = data;
    const user = await userModel.findOne({$or: [{username: username}, {email: email}]});
    if(user) throw new Error("User already exists!");

    const hashedPassword = await hashPassword(password);
    const newUser = await userModel.create({name, username, email, password: hashedPassword});
    
    const returnUser = newUser.toObject();
    delete returnUser.password;

    return returnUser;
}

export const loginUserService = async (data) => {
    const user = await userModel.findOne({$or: [{username: data.username}, {email: data.email}]});
    
    if(!user) throw new Error("Invalid Credentials");
    
    await comparePassword(data.password, user.password);
    
    const newAccessToken = accessTokenGenerator(user._id, user.username, user.role);
    const newRefreshToken = refreshTokenGenerator(user._id);

    user.refreshToken = newRefreshToken;
    await user.save();

    const newUser = user.toObject();
    delete newUser.__v;
    delete newUser.password;
    delete newUser.refreshToken;

    return {user: newUser, accessToken: newAccessToken, refreshToken: newRefreshToken};
}

export const accessTokenService = async (refreshToken) => {
    const token = verifyToken(refreshToken);
    const user = await userModel.findById(token.id);

    if(!user || user.refreshToken !== refreshToken) throw new Error("Invalid user token!");

    const newAccessToken = accessTokenGenerator(user.id, user.username, user.role);

    return newAccessToken;
}

export const getUserService = async (data) => {
    const user = await userModel.findOne({$or : [{username: data.username}, {email: data.email}]}).populate("application");
    if(!user) throw new Error("User not found!");

    const returnUser = user.toObject();
    delete returnUser.__v;
    delete returnUser.password;
    delete returnUser.refreshToken;
    delete returnUser.role;

    return returnUser;
}

export const getAllUsersService = async () => {
    const users = await userModel.find().select("-__v -password -refreshToken");
    return users;
}

export const updateUserService = async (filter, data) => {
    const user = await userModel.findOneAndUpdate({$or : [{username: filter.username}, {email: filter.email}]}, data, {new: true});
    if(!user) throw new Error("User not found!");

    return user;
}

export const deleteUserService = async (filter, data) => {
    const user = await userModel.findOne({$or: [{username: filter.username}, {email: filter.email}, {_id: filter.id}]});

    if(!user){
        throw new Error("User not found!");
    }

    await comparePassword(data.password, user.password);

    const deletedUser = await userModel.findOneAndDelete(user._id);

    const deleteUser = deletedUser.toObject();
        
    delete deleteUser.__v;
    delete deleteUser.password;
    delete deleteUser.refreshToken;
    delete deleteUser.role;

    return deleteUser;
}

export const changePasswordService = async (user_id,data) => {
    const user = await userModel.findById(user_id);
    const {currentPassword, newPassword, confirmPassword} = data;
    
    if(!user){
        throw new Error("Invalid User!");
    }

    await comparePassword(currentPassword, user.password);

    if(newPassword !== confirmPassword){
        throw new Error("Passwords didn't match");
    }

    const newHashPassword = await hashPassword(newPassword);
    user.password = newHashPassword;
    await user.save();
}


