/**
 * type
 **/

import mongoose from 'mongoose'

const typeSchema = mongoose.Schema({
    id: String,
    name_de: String,
    name_gb: String,    
}, {
    timestamps: true 
});

export default typeSchema;