/**
 * images tables
 **/

import mongoose from 'mongoose'

module.exports = new mongoose.Schema({    
    path: String,
    type: String,  // 'banner', 'hamburger'
    index: Number,
    title: String,
    description: String   
});