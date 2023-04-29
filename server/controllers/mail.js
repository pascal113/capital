import Image from '../models/image.js'
import asyncHandler from 'express-async-handler';
import {responseClient} from '../utils/util.js'
import { sendContactMail, sendJobMail } from "../utils/sendmail_sendinblue.js";

const send_contact = asyncHandler(async (req, res) => {

    try {    
        const {
            department,
            company_name,
            company_phone,
            company_address,
            company_plz,
            email,
            user_name
        } = req.body;
    
        console.log(req.body);

        sendContactMail({
            param: req.body
        });
      
        responseClient(res,200,0,'Send success');

    }
    catch (error) {
        console.log(error);
        responseClient(res);
    }  
});

const send_job = asyncHandler(async (req, res) => {

    try {
  
      let path = req.file.path;
  
      const {
        type,
        index,
        title,
        description
      } = req.body;
  
      console.log(req.body);
  
      const image = await Image.findOne({
        index: index,
        type: type
      });
  
      if (image === null || image.length === 0) {
        const addImage = await Image.create({
          path,
          type,
          index,
          title,
          description
        });
      
        const resData = await addImage.save();
        console.log('ok');
        responseClient(res,200,0,'Save success',resData);
      }
      else {
        console.log(image);
        responseClient(res,200,0,'Image already exist');
      }
    }
    catch (error) {
      console.log(error);
      responseClient(res);
    }
  
});

export { send_contact, send_job };