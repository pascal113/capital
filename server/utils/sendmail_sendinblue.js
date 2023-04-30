import { TEAM_NAME, SERVICE_MAIL } from "../config/constant.js";
import sendinblue from "./sendinblue.js";
import i18n from "../config/i18n.js";
import dotenv from 'dotenv';
import e from "express";
dotenv.config();

const sendContactMail = async ({
    param
  }) => {
    console.log(param);
    let email = param.email;
    console.log(email);
    const message = `<h4>${i18n.__('CheckEmailTitle')}</h4>
                      <p>${i18n.__('ThankRegistering')}</p><br />
                      <p>${i18n.__('WelcomeToTeam', TEAM_NAME)}</p>
                      <p>${i18n.__('CheckEmailSection1')}</p>
                      <p>${param.department} </p>
                      <p>${param.company_name} </p>
                      <p>${param.company_phone} </p>
                      <p>${param.company_address} </p>
                      <p>${param.company_plz} </p>
                      <p>${param.user_name} </p>
                      <p>${i18n.__('CheckEmailSection2')}</p>
                      <p>${i18n.__('CheckEmailSection3', SERVICE_MAIL)}</p>
                      <br />
                      <p>${i18n.__('FromTeam', TEAM_NAME)}</p>`;
    return await sendinblue({
      to: [{
        email
      }],
      subject: i18n.__('ContactEmailSubject', TEAM_NAME),
      sender: {
        email: process.env.MAIL_SENDER,
        name: TEAM_NAME
      },
      htmlContent: message
    });
};

const sendJobMail = async ({
  param,
  files
}) => {
  let email = param.email;
  console.log(param);

  const message = `<h4>${i18n.__('CheckEmailTitle')}</h4>
                    <p>${i18n.__('ThankRegistering')}</p><br />
                    <p>${i18n.__('WelcomeToTeam', TEAM_NAME)}</p>
                    <p>${i18n.__('CheckEmailSection1')}</p>
                    <p>${param.department} </p>
                    <p>${param.company_name} </p>
                    <p>${param.company_phone} </p>
                    <p>${param.company_address} </p>
                    <p>${param.company_plz} </p>
                    <p>${param.user_name} </p>
                    <p>${i18n.__('CheckEmailSection2')}</p>
                    <p>${i18n.__('CheckEmailSection3', SERVICE_MAIL)}</p>
                    <br />
                    <p>${i18n.__('FromTeam', TEAM_NAME)}</p>`;
  
  const mail_data = {
    to: [{
      email
    }],
    subject: i18n.__('JobEmailSubject', TEAM_NAME),
    sender: {
      email: process.env.MAIL_SENDER,
      name: TEAM_NAME
    },
    htmlContent: message
  };

  console.log(files);
  const attachments = Object.keys(files).map(key => {
    const fileArray = files[key];
    return fileArray.map(file => ({
      name: file.originalname,
      content: file.buffer.toString('base64'),
      type: file.mimetype
    }));
  }).flat();
  
//  console.log(attachments);

  // const attachments = [];

  // Object.keys(files).forEach(key => {
  //   const fileArray = files[key];
  //   fileArray.forEach(file => {
  //     attachments.push({
  //       name: file.originalname,
  //       content: file.buffer.toString('base64'),
  //       type: file.mimetype
  //     });
  //   });
  // });

  // console.log(attachments);

  mail_data.attachment = attachments;

  return await sendinblue(mail_data);
};

export { sendContactMail, sendJobMail };