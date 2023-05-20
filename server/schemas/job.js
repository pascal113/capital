/**
 * jobs
 **/

import mongoose from 'mongoose'

const jobSchema = mongoose.Schema({
    title: String,
    type: String,
    location: String,
    field: String,
    about: String,
    title_gb: String,
    type_gb: String,
    location_gb: String,
    field_gb: String,
    about_gb: String
}, {
    timestamps: true 
});

export default jobSchema;