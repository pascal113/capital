import sendinblue from "./sendinblue.js";
import dotenv from 'dotenv';
import {isEmpty} from './libs.js'
dotenv.config();

const sendContactMail = async ({
    param
  }) => {
    const message = `<h4>${param.mail_subject}</h4>
                      <p> Abteilung -> ${param.department} </p>
                      <p> Firmenname -> ${param.company_name} </p>
                      <p> Firmenrufnummer -> ${param.company_phone} </p>
                      <p> Firmenanschrift -> ${param.company_address} </p>
                      <p> PLZ - ${param.company_plz} </p>
                      <p> E-Mail -> ${param.email} </p>
                      <p> Nachricht -> ${param.user_message} </p>`;
                      
    return await sendinblue({
      to: [{
        email: process.env.MAIL_RECEIVER
      }],
      subject: param.mail_subject,
      sender: {
        email: process.env.MAIL_SENDER
      },
      htmlContent: message
    });
};

const sendJobMail = async ({
  param,
  files
}) => {

  const message = `<h4>${param.mail_subject}</h4>
    <p> VORNAME -> ${param.first_name} </p>
    <p> NACHNAME -> ${param.last_name} </p>
    <p> E-MAIL -> ${param.email} </p>
    <p> TELEFONNUMMER -> ${param.phone_number} </p>
    <p> DEIN FRÜHSTMÖGLICHER EINTRITTSTERMIN - ${param.statement_duty} </p>
    <p> DEINE GEHALTSVORSTELLUNGEN -> ${param.payment} </p>
    <p> WIE BIST DU AUF UNS AUFMERKSAM GEWORDEN -> ${param.attented} </p>
    <p> WEITERGABE DEINER BEWERBUNG -> ${param.application_process_data} </p>`;
  
  const mail_data = {
    to: [{
      email: process.env.MAIL_RECEIVER
    }],
    subject: param.mail_subject,
    sender: {
      email: process.env.MAIL_SENDER
    },
    htmlContent: message
  };

  if (!isEmpty(files)) {
    console.log('data files');
    const attachments = Object.keys(files).map(key => {
      const fileArray = files[key];
      return fileArray.map(file => ({
        name: file.originalname,
        content: file.buffer.toString('base64'),
        type: file.mimetype
      }));
    }).flat();

    mail_data.attachment = attachments;
  }  

  return await sendinblue(mail_data);
};

export { sendContactMail, sendJobMail };