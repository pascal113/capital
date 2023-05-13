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

export const getMailDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yy = String(today.getFullYear()).slice(-2);
    const formattedDate = `${dd}-${mm}-${yy}`;

    return formattedDate;
};