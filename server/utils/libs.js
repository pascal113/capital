import i18n from "../config/i18n.js";

export const errorMessageGenerator = msgCode => {
    return i18n.__(msgCode);
};

export const genRand = len => {
    return Math.random().toString(36).substring(2, len + 2);
};

export const responseClient = (res,httpCode = 500, code = 3, message='Server Error',data={}) => {
    let responseData = {};
    responseData.code = code;
    responseData.message = message;
    responseData.data = data;
    res.status(httpCode).json(responseData);
};