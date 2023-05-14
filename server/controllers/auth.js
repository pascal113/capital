import User from "../models/user.js";
import asyncHandler from 'express-async-handler';
import { ERROR_USER_NOT_EXIST, ERROR_NOT_ADMIN, ERROR_DB_CONNECTION_ERROR, ERROR_INVALID_PASSWORD, ERROR_TOKEN_NOT_AUTH } from "../config/constant.js";
import { responseClient, errorMessageGenerator } from "../utils/libs.js";
import { generateAuthTokenByUser } from "../utils/generateToken.js";

let env = process.env;

const login = asyncHandler(async (req, res) => {

    try {
        const {
            email,
            password,
            captchaValue
        } = req.body; // Check CAPTCHA

        console.log(req.body);
    
        // const isHuman = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
        //   method: "post",
        //   headers: {
        //     Accept: "application/json",
        //     "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
        //   },
        //   body: `secret=${env['RECAPTCHA_SECRET_KEY']}&response=${captchaValue}`
        // }).then(res => res.json()).then(json => json.success).catch(err => {
        //   throw new Error(`${err.message}`);
        // });
    
        // if (captchaValue === null || !isHuman) {
        //   console.log('You are not a human');
        //   res.status(400);
        //   throw new Error(errorMessageGenerator(ERROR_YOU_ARE_NOT_A_HUMAN));
        // } // Check Exist
        
        const user = await User.findOne({
            email
        });
    
        if (!user) {
            return responseClient(res, 400, 3, errorMessageGenerator(ERROR_USER_NOT_EXIST));
        }
            
        if (!user.isAdmin) {
            return responseClient(res, 400, 3, errorMessageGenerator(ERROR_NOT_ADMIN));
        }
        
        if (user && (await user.matchPassword(password))) { 
            user.lastSeen = Date.now();
            const updatedUser = await user.save();
        
            if (!updatedUser) {
                return responseClient(res, 400, 3, errorMessageGenerator(ERROR_DB_CONNECTION_ERROR));
            }
        
            const jwtToken = updatedUser.generateAuthToken({
                id: updatedUser._id
            });
        
            if (user.isAdmin) {
                console.log('admin ', req.get('origin'));
                res.cookie("token", jwtToken, {
                    path: '/',
                    sameSite: true,
                    httpOnly: true,
                    // secure: true
                    domain: env['DOMAIN']
                });
                // res.cookie("token", jwtToken, {
                //     path: '/',
                //     sameSite: true,
                //     httpOnly: true,
                //     // secure: true
                //     domain: env['DOMAIN']
                // }).status(301).redirect('/' + 'admin');

                // req.user = updatedUser;
                req.session.userInfo = updatedUser;

                const token = generateAuthTokenByUser(updatedUser);
                console.log('login ', token);
                responseClient(res, 200, 0, 'success', {token: token});
            }
        } else {        
            await user.save();
            responseClient(res, 400, 3, errorMessageGenerator(ERROR_INVALID_PASSWORD));
        }
    } 
    catch (error) {
        console.log(error);
        responseClient(res);
    }
});

const logout = asyncHandler(async (req, res) => {
    if (!req.user_id) {
        responseClient(res, 400, 3, errorMessageGenerator(ERROR_TOKEN_NOT_AUTH));
    }

    req.session.destroy();
    res.clearCookie("token");
    res.status(301).redirect('/');
});

const check_auth = asyncHandler(async (req, res) => {
    if (!req.user_id) {
        responseClient(res, 400, 3, errorMessageGenerator(ERROR_TOKEN_NOT_AUTH));
    }

    console.log('reach check auth : np');
    res.status(201).json({
        _id: req.user_id
    });
});

export { login, logout, check_auth };