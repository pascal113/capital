/**
 * images tables
 **/

import mongoose from 'mongoose'

const imageSchema = mongoose.Schema({    
    path: String,
    type: String,  // 'banner', 'hamburger'
    index: Number,
    subIndex: Number,
    order: Number,
    title_de: String,
    title_gb: String,
    url: String,
    description: String   
}, {
    timestamps: true
});

export default imageSchema;