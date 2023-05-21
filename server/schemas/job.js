/**
 * jobs
 **/

import mongoose from 'mongoose'

const jobSchema = mongoose.Schema({    
    type: String,
    location: String,
    field: String,
    title_de: String,
    about_de: String,
    title_gb: String,
    about_gb: String
}, {
    timestamps: true 
});

export default jobSchema;