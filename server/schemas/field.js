/**
 * field
 **/

import mongoose from 'mongoose'

const fieldSchema = mongoose.Schema({
    id: String,
    name_de: String,
    name_gb: String,    
}, {
    timestamps: true 
});

export default fieldSchema;