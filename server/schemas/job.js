/**
 * jobs
 **/

import mongoose from 'mongoose'

const jobSchema = mongoose.Schema({
    title: String,
    type: String,
    location: String,
    field: String,
    about: String
}, {
    timestamps: true 
});

export default jobSchema;