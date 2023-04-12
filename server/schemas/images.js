/**
 * images tables
 **/

import mongoose from 'mongoose'

module.exports = new mongoose.Schema({    
    path:String,
    type:String, 
    description:String   
});