import pkg from 'sib-api-v3-sdk';
import dotenv from 'dotenv';
dotenv.config();
const {
  ApiClient
} = pkg;
const defaultClient = ApiClient.instance; // Configure API key authorization: api-key

let apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.MAIL_API_KEY;

let apiInstance = new pkg.TransactionalEmailsApi();

// const sendinblue = sendSmtpEmail => {
//   apiInstance.sendTransacEmail(sendSmtpEmail).then(function (data) {
//     console.log('success ', sendSmtpEmail, data);
//     return true;
//   }, function (error) {
//     console.error('sendinblue error ', error);
//     return false;
//   });
// };

const sendinblue = async sendSmtpEmail => {
  try {
    let response = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log('Email sent with response:', response);
    return true;
  } catch( error) {
    console.error('sendinblue error ', error);
    return false;
  }
};

export default sendinblue;