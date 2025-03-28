import jwt from 'jsonwebtoken'; 
import { ENV_VARS } from '../config/envVars.js';

export const generateTokenAndSetCookie = (userId,res) => {  
    const token =jwt.sign({userId}, ENV_VARS.JWT_SECRET, {expiresIn: '15d'});

    res.cookie("jwt-netflix", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in MS
        httpOnly: true, // prevents client side JS from reading the cookie/ prevent xss attackes cross-site scripting attacks, making it accessible only on the server side.
        sameSite:"strict", // cookie will only be set in the same origin of the domain/ CSRF attacks cross-site request forgery attacks
        secure:ENV_VARS.NODE_ENV !== "development" , // cookie will only be set in https

    });
    return token;
};
