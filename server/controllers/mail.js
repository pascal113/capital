import Image from '../models/image.js'
import asyncHandler from 'express-async-handler';
import {responseClient} from '../utils/libs.js'
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

        let send_res = await sendContactMail({
            param: req.body
        });

        console.log(send_res);

        if (send_res) {
          responseClient(res,200,0,'Send success');
        }
        else {
          responseClient(res);
        }
      
    }
    catch (error) {
        console.log(error);
        responseClient(res);
    }  
});

const send_job = asyncHandler(async (req, res) => {

    try {     
      const {
        first_name,
        last_name,
        email,
        phone_number,
        statement_duty,
        payment,
        attented,
        application_process // true, false
      } = req.body;
  
      console.log(req.body);

      console.log(req.files);
  
      let send_res = await sendJobMail({
        param: req.body,
        files: req.files
      });

      console.log(send_res);

      if (send_res) {
        responseClient(res,200,0,'Send success');
      }
      else {
        responseClient(res);
      }
      
    }
    catch (error) {
      console.log(error);
      responseClient(res);
    }
  
});

export { send_contact, send_job };