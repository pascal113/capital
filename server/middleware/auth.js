import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import asyncHandler from 'express-async-handler';
import User from '../models/user.js';
import { ERROR_TOKEN_EMPTY, ERROR_TOKEN_EXPIRED, ERROR_TOKEN_NOT_ADMIN, ERROR_TOKEN_NOT_AUTH } from '../config/constant.js';
import { errorMessageGenerator } from '../utils/libs.js';
dotenv.config();
const env = process.env;
const protect = asyncHandler(async (req, res, next) => {
  const token = req.cookies.token;
  console.log(token);

  if (!token) {
    res.status(401);
    throw new Error(errorMessageGenerator(ERROR_TOKEN_EMPTY));
  }

  try {
    const _id = jwt.verify(token, env.JWT_SECRET, (err, decoded) => {
      // Token Verification Error
      if (err) {
        res.clearCookie("token");
        res.status(401);

        if (err.name === 'TokenExpiredError') {
          throw new Error(errorMessageGenerator(ERROR_TOKEN_EXPIRED));
        } else {
          throw new Error(errorMessageGenerator(ERROR_TOKEN_NOT_AUTH));
        }
      }

      return decoded._id;
    }); // Check if user exist


    const isUser = await User.findOne({
      _id
    });

    if (!isUser) {
      res.clearCookie("token");
      res.status(401);
      throw new Error(errorMessageGenerator(ERROR_TOKEN_NOT_AUTH));
    }

    req.user_id = _id;
    next();
  } catch (err) {
    res.clearCookie("token");
    res.status(401);
    throw new Error(errorMessageGenerator(ERROR_TOKEN_NOT_AUTH));
  }
});

const auth = (req, res, next) => {
  const token = req.header("x-auth-token");
  console.log('auth ', token);
  if (!token)
    return res.status(401).send("Access denied. Not authenticated...");
  try {
    const jwtSecretKey = env.JWT_SECRET;
    const decoded = jwt.verify(token, jwtSecretKey);

    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send("Invalid auth token...");
  }
};

const checkAdmin = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({
    _id: req.user_id
  });

  if (!user) {
    res.status(401);
    throw new Error(errorMessageGenerator(ERROR_TOKEN_NOT_ADMIN));
  }

  if (!user.isAdmin) {
    res.status(401);
    throw new Error(errorMessageGenerator(ERROR_TOKEN_NOT_ADMIN));
  }

  next();
});

export { checkAdmin, auth, protect };