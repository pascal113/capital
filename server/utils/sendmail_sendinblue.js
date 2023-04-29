import { TEAM_NAME, SERVICE_MAIL } from "../config/constant.js";
import sendinblue from "./sendinblue.js";
import i18n from "../config/i18n.js";
import dotenv from 'dotenv';
dotenv.config();

const sendContactMail = ({
    email,
    origin
  }) => {
    const token = generateCheckEmailToken({
      email
    });
    const checkEmailURL = `${origin}/set-password/token=${token}`;
    console.log('check email url: ', email, checkEmailURL);
    const message = `<h4>${i18n.__('CheckEmailTitle')}</h4>
                      <p>${i18n.__('ThankRegistering')}</p><br />
                      <p>${i18n.__('WelcomeToTeam', TEAM_NAME)}</p>
                      <p>${i18n.__('CheckEmailSection1')}</p>
                      <p><a href="${checkEmailURL}">
                          <button style="
                              background-color: #008CBA;
                              border: none;
                              color: white;
                              padding: 15px 32px;
                              text-align: center;
                              text-decoration: none;
                              display: inline-block;
                              font-size: 16px;
                              margin: 4px 2px;
                              cursor: pointer;">
                              
                              ${i18n.__('Confirm')}
                          
                              </button>
                      </a></p>
                      <p>${i18n.__('CheckEmailSection2')}</p>
                      <p>${i18n.__('CheckEmailSection3', SERVICE_MAIL)}</p>
                      <br />
                      <p>${i18n.__('FromTeam', TEAM_NAME)}</p>`;
    sendinblue({
      to: [{
        email
      }],
      subject: i18n.__('CheckEmailLinkSubject', TEAM_NAME),
      sender: {
        email: process.env.MAIL_SENDER,
        name: TEAM_NAME
      },
      htmlContent: message
    });
};

const sendJobMail = ({
    email,
    origin
  }) => {
    const token = generateCheckEmailToken({
      email
    });
    const checkEmailURL = `${origin}/set-password/token=${token}`;
    console.log('check email url: ', email, checkEmailURL);
    const message = `<h4>${i18n.__('CheckEmailTitle')}</h4>
                      <p>${i18n.__('ThankRegistering')}</p><br />
                      <p>${i18n.__('WelcomeToTeam', TEAM_NAME)}</p>
                      <p>${i18n.__('CheckEmailSection1')}</p>
                      <p><a href="${checkEmailURL}">
                          <button style="
                              background-color: #008CBA;
                              border: none;
                              color: white;
                              padding: 15px 32px;
                              text-align: center;
                              text-decoration: none;
                              display: inline-block;
                              font-size: 16px;
                              margin: 4px 2px;
                              cursor: pointer;">
                              
                              ${i18n.__('Confirm')}
                          
                              </button>
                      </a></p>
                      <p>${i18n.__('CheckEmailSection2')}</p>
                      <p>${i18n.__('CheckEmailSection3', SERVICE_MAIL)}</p>
                      <br />
                      <p>${i18n.__('FromTeam', TEAM_NAME)}</p>`;
    sendinblue({
      to: [{
        email
      }],
      subject: i18n.__('CheckEmailLinkSubject', TEAM_NAME),
      sender: {
        email: process.env.MAIL_SENDER,
        name: TEAM_NAME
      },
      htmlContent: message
    });
};

export { sendContactMail, sendJobMail };