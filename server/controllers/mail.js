import Mail from '../models/mail.js'
import asyncHandler from 'express-async-handler';
import { responseClient, getMailDate } from '../utils/libs.js'
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
            user_message
        } = req.body;
    
        let mail_date = getMailDate();  
        let mail_log = await Mail.find().sort({createdAt:-1}).limit(1);

        let mail_index = 0;
        let type = 'contact';
    
        if (mail_log === null || mail_log.length === 0) {
          mail_index = 1;
        }
        else {
          mail_index = mail_log[0].index + 1;
        }

        let mail_subject = 'C-' + mail_date + '-' + mail_index;

        const mailParam = { 
          department,
          company_name,
          company_phone,
          company_address,
          company_plz,
          email,
          user_message,
          mail_subject
        };
        
        let addMailLog = await Mail.create({
          type,
          subject: mail_subject,
          index: mail_index
        });

        let send_res = await sendContactMail({
            param: mailParam
        });

        if (send_res) {
          responseClient(res,200,0,'Send success', addMailLog);
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