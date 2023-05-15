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
import cors from 'cors'

import connectDB from './config/db.js'
import {responseClient} from './utils/libs.js'

import authRoutes from './routes/auth.js';
import jobRoutes from './routes/jobs.js';
import imagesRoutes from './routes/images.js';
import mailRoutes from './routes/mail.js';

dotenv.config();
await connectDB();

const env = process.env;
const port = env['API_PORT'];

const app = new Express();
app.use(Express.json());        // json data
app.use(cors()); // cors 
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser('express_react_cookie'));
app.use(session({
    secret:'express_react_cookie',
    resave: true,
    saveUninitialized:true,
    cookie: {maxAge: 60 * 1000 * 30}//expire time
}));

const apiLogger = (req, res, next) => {
    console.log(`api called`);
    console.log(`>>>>>>> ${req.method} ${req.url}`); // console.log(`>> query: `, req.query);
    // console.log(`>> params: `, req.params);
    // console.log(`>> body: `, req.body);
    // console.log(`>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`);
  
    next();
}; // Middleware

app.use('/api', apiLogger); // Routes

app.use('/api/jobs', jobRoutes);
app.use('/api/images', imagesRoutes);
app.use('/api/mail', mailRoutes);
app.use('/api/auth', authRoutes);

const __dirname = path.resolve();
console.log(__dirname);
// app.use('/static', Express.static(path.join(__dirname, '/static')));
app.use('/uploads', Express.static(path.join(__dirname, '/uploads')));

const beforeAdminProcess = (req, res, next) => {
    console.log(`adminProcess`);
    console.log(`>>>>>>> ${req.method} ${req.url}`);

    console.log('req user', req.user);
    console.log(req.session.userInfo);

    const token = req.cookies.token;
    console.log(token);
        
    if(req.session.userInfo) {
    // if(req.user) {
        console.log('login state');
        next();
    }
    else {
        console.log('login error');
        // res.redirect('/');
        res.redirect('/login');        
    }
};

const indexProcess = (req, res, next) => {
    console.log(`indexProcess`);
    next();
};

if (env['ENV'] === 'production') {
    console.log('production mode');

    // mobile
    // app.use('/mobile', Express.static(path.join(__dirname, '/mobile/build')));
    
    // admin route
    app.use('/admin', beforeAdminProcess); 
    app.use('/admin', Express.static(path.join(__dirname, '/admin/build')));
    app.use('/login', Express.static(path.join(__dirname, '/admin/build')));
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
        console.info('===> api server is running at ' + port);
    }
});
