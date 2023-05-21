/**
 * location
 **/

import mongoose from 'mongoose'

const locationSchema = mongoose.Schema({
    id: String,
    name_de: String,
    name_gb: String,    
}, {
    timestamps: true 
});

export default locationSchema;