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

        console.log(req.body);
        // console.log(req);

        let type = 'contact';    
        let mail_date = getMailDate();  
        let mail_log = await Mail.find({type: type}).sort({createdAt:-1}).limit(1);

        let mail_index = 0;
        
    
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
  
      let type = 'job';    
      let mail_date = getMailDate();  
      let mail_log = await Mail.find({type: type}).sort({createdAt:-1}).limit(1);

      let mail_index = 0;
      
  
      if (mail_log === null || mail_log.length === 0) {
        mail_index = 1;
      }
      else {
        mail_index = mail_log[0].index + 1;
      }

      let mail_subject = 'J-' + mail_date + '-' + mail_index;
      let application_process_data = 'Ja';

      if(application_process !== 'true') {
        application_process_data = 'Nein';
      }

      const mailParam = { 
        first_name,
        last_name,
        email,
        phone_number,
        statement_duty,
        payment,
        attented,
        application_process_data,
        mail_subject
      };
      
      let addMailLog = await Mail.create({
        type,
        subject: mail_subject,
        index: mail_index
      });
  
      let send_res = await sendJobMail({
        param: mailParam,
        files: req.files
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

export { send_contact, send_job };