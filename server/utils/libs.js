import path from "path";
import fs from 'fs'
import i18n from "../config/i18n.js";
import { upload } from "./multer.js";

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

export const getRootPath = () => {
    const projectPath = path.resolve();
    return projectPath + '/';
};

export const deleteImageFile = imagePath => {
    fs.unlink(imagePath, (err) => {
        if (err) {
          console.error(err);
          return false;
        }
        console.log('file deleted');
        return true;
    });
};

export const initAllImageFile = () => {
    
    const dstDirectory = getRootPath() + 'uploads';
    const srcDirectory = getRootPath() + 'backups';

    fs.readdirSync(dstDirectory).forEach(file => {
        const filePath = `${dstDirectory}/${file}`;
        deleteImageFile(filePath);
    });

    fs.readdirSync(srcDirectory).forEach(file => {
        const filePath = `${srcDirectory}/${file}`;
        const destPath = `${dstDirectory}/${file}`;
        fs.copyFileSync(filePath, destPath);
    });
};

export const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
}