import crypto from 'crypto'

export const MD5_SUFFIX = 'eiowafnajkdlfjsdkfjsdsdadasdsdsa  *&……';

export const md5 = pwd => {
    let md5 = crypto.createHash('md5');
    return md5.update(pwd).digest('hex');
};

export const responseClient = (res,httpCode = 500, code = 3,message='Server Error',data={}) => {
    let responseData = {};
    responseData.code = code;
    responseData.message = message;
    responseData.data = data;
    res.status(httpCode).json(responseData);
};

