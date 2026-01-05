import jwt from "jsonwebtoken";
import {JWT_SECRET, ACCESS_TOKEN_EXPIRES_IN, REFRESH_TOKEN_EXPIRES_IN} from "../config/envConfig.js";

export const accessTokenGenerator = (data) => {
    const {_id, username, role} = data;
    const token = jwt.sign({_id, username, role}, JWT_SECRET,{expiresIn: ACCESS_TOKEN_EXPIRES_IN});
    return token;
}

export const refreshTokenGenerator = (id) => {
    const token = jwt.sign({id}, JWT_SECRET,{expiresIn: REFRESH_TOKEN_EXPIRES_IN});
    return token;
}

export const verifyToken = (token) => {
    const verify = jwt.verify(token, JWT_SECRET);
    return verify;
}