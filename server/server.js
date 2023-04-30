import mongoose from 'mongoose';
import colors from 'colors';
import Express from 'express'
import dotenv from 'dotenv';
import path from 'path';
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import multer from 'multer';
import SibApiV3Sdk from 'sib-api-v3-sdk';

import connectDB from './config/db.js'
import {responseClient} from './utils/libs.js'

import userRoutes from './routes/user.js';
import jobRoutes from './routes/jobs.js';
import imagesRoutes from './routes/images.js';
import mailRoutes from './routes/mail.js';

dotenv.config();
await connectDB();

const env = process.env;
const port = env['API_PORT'];

const app = new Express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser('express_react_cookie'));
app.use(session({
    secret:'express_react_cookie',
    resave: true,
    saveUninitialized:true,
    cookie: {maxAge: 60 * 1000 * 30}//expire time
}));

// const fs = require('fs');

// try {
//   fs.readdirSync('uploads');
// } catch (error) {
//   console.error('if no uploads folder, make uploads folder.');
//   fs.mkdirSync('uploads');
// }

// const upload = multer({
//   storage: multer.diskStorage({
//     destination(req, file, done) {
//       done(null, 'uploads/');
//     },
//     filename(req, file, done) {
//       const ext = path.extname(file.originalname);
//       done(null, path.basename(file.originalname, ext) + Date.now() + ext);
//     },
//   }),
//   limits: { fileSize: 5 * 1024 * 1024 },
// });

const upload = multer({ 
    dest: 'static/uploads/',
    limits: { fileSize: 5 * 1024 * 1024 }
});

app.get('/upload', (req, res) => {
    console.log('get upload');    
    res.send('ok');
});

// app.post('/upload', upload.single('file'), (req, res) => {
app.post('/upload', upload.single('image'), (req, res) => {
    console.log('post upload');
    console.log(req.file);
    res.send('ok');
});

// const SibApiV3Sdk = require('sib-api-v3-sdk');

const defaultClient = SibApiV3Sdk.ApiClient.instance;

const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = env['MAIL_API_KEY'];

const transactionEmailApi = new SibApiV3Sdk.TransactionalEmailsApi();

let smtpMailData = new SibApiV3Sdk.SendSmtpEmail();

const sender = {
    email: env['MAIL_SENDER'], // your email address
    name: 'Example Sender',
};

const SendWaitlistEmail = async (subject, to_email) => {
    try {
        smtpMailData.sender = sender;
        
        smtpMailData.to = [{
            email: to_email,
            name: 'fullname'
        }];
        
        smtpMailData.subject = subject;
        
        smtpMailData.params = {
            'name': 'param',
            'twitter': '@makeuseof'
        };
        
        smtpMailData.htmlContent = "<html><body><p>Hello {{ params.name }}, "
            + "welcome to makeuseof.com waitlist. We'll notify you "
            + "when we launch. Kindly follow us on Twitter "
            + "{{ params.twitter }}.</p></body></html>";
        
        // send email
        await transactionEmailApi.sendTransacEmail(smtpMailData)
            .then((data) => { 
                console.log(data) // log the email id
            })
            .catch((error) => {
                console.error(error)
                throw new Error(error) // handle errors
            })
    } catch (error) {
        console.log('An error occured...')
        console.error(error)
        throw new Error(error) // handle errors
    }
}

app.post('/sendEmail', async (req, res) => {
    console.log('post sendEmail');
    console.log(req.body);
    let {
        subject,
        to_email
    } = req.body;

    await SendWaitlistEmail(subject, to_email);
    res.send('ok');
});

const apiLogger = (req, res, next) => {
    console.log(`api called`);
    console.log(`>>>>>>> ${req.method} ${req.url}`); // console.log(`>> query: `, req.query);
    // console.log(`>> params: `, req.params);
    // console.log(`>> body: `, req.body);
    // console.log(`>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`);
  
    next();
}; // Middleware

app.use('/api', apiLogger); // Routes

app.use('/api/users', userRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/images', imagesRoutes);
app.use('/api/mail', mailRoutes);

const __dirname = path.resolve();
console.log(__dirname);
app.use('/static', Express.static(path.join(__dirname, '/static')));

const beforeAdminProcess = (req, res, next) => {
    console.log(`adminProcess`);
    console.log(`>>>>>>> ${req.method} ${req.url}`);
    if(req.session.userInfo) {
        console.log('login state');
        next();
    }
    else {
        console.log('login error');
        // res.send(responseClient(res,200,1,'Information is out. Please retry input.'));
        // res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
        res.redirect('/');
        // next();
    }
};

const indexProcess = (req, res, next) => {
    console.log(`indexProcess`);
    next();
};

if (env['ENV'] === 'production') {
    console.log('production mode');
    
    // admin route
    app.use('/admin', beforeAdminProcess); 
    app.use('/admin', Express.static(path.join(__dirname, '/admin/build')));
    // app.get('/admin/*', (req, res) => 
    //     res.sendFile(path.resolve(__dirname, 'admin', 'build', 'index.html'))
    // );

    app.get('/admin', (req, res) => {
        console.log('admin clinet');
        res.sendFile(path.resolve(__dirname, 'admin', 'build', 'index.html'));   
    });
 
    // client route ok
    // app.use(Express.static(path.join(__dirname, '/client/build')));    
    // app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));

    // app.use(indexProcess);
    app.use(Express.static(path.join(__dirname, '/client/build')));
    // app.get('*', (req, res) => {
    //     console.log('index clinet');
    //     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    // });
} 

app.listen(port, function (err) {
    if (err) {
        console.error('err:', err);
    } else { 
        let defaultClient = SibApiV3Sdk.ApiClient.instance;
        
        let api = new SibApiV3Sdk.AccountApi();
        api.getAccount().then(function(data) {
            console.log('API called successfully. Returned data: ' + data);
            // console.log(data);
        }, function(error) {
            console.error(error);
        });
        
        console.info('===> api server is running at ' + port);
    }
});
