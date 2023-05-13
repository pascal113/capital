/**
 * mail
 **/

import mongoose from 'mongoose'

const mailSchema = mongoose.Schema({
    type: String,
    subject: String,
    index: Number,    
}, {
    timestamps: true 
});

export default mailSchema;