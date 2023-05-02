import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { TOKEN_AUTH } from '../config/constant.js';
dotenv.config();
const jwtSecret = process.env.JWT_SECRET;

const generateAuthToken = ({
    id
}) => {
    return jwt.sign({
      id,
      type: TOKEN_AUTH
    }, jwtSecret, {
      expiresIn: '1800s' // expiresIn: '1800s',
  
    });
};

const generateAuthTokenByUser = (user) => {
    const token = jwt.sign(
      {
        _id: user._id,
        name: user.firstName + user.lastName,
        email: user.email,
        isAdmin: user.isAdmin,
      },
      jwtSecret
    );
  
    return token;
  };
  
const checkToken = token => {
    const {
        exp,
        email,
        type
    } = jwt.decode(token);

    if (Date.now() >= exp * 1000) {
        return {
        valid: false
        };
    }

    return {
        valid: true,
        email,
        type
    };
};
  
export { generateAuthToken, generateAuthTokenByUser, checkToken };